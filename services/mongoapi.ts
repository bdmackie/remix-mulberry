import { z } from "zod";
import type { ZodSchema } from "zod";

export type IMongoApiInit = {
  appId: string;
  region?: string;
  apiKey: string;
  databaseName: string;
  clusterName: string;
};

type MongoResopnseData = {
  documents: Array<any>;
};

// Service implementation class
export class MongoApi<T> {
  private arraySchema: ZodSchema;
  private baseUrl: string;

  constructor(private init: IMongoApiInit, private typeSchema: ZodSchema) {
    this.arraySchema = z.array(typeSchema);
    this.baseUrl = this.init.region
      ? `https://${this.init.region}.aws.data.mongodb-api.com/app/${this.init.appId}/endpoint/data/v1`
      : `https://data.mongodb-api.com/app/${this.init.appId}/endpoint/data/v1`;
  }

  // async find<T>(schema: ZodSchema, collection : string): Promise<T[]> {
  async find(collection: string): Promise<T[]> {
    //let pipeline = [{ $limit: 100 }];

    let body = {
      collection: collection,
      database: this.init.databaseName,
      dataSource: this.init.clusterName,
    };
    //   console.log("Request Body: ", body);

    let requestUrl = this.baseUrl + "/action/find";
    //   console.log("Request URL: ", requestUrl);

    let requestInit = {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Request-Headers": "*",
        "api-key": this.init.apiKey,
      },
    };

    // Do the fetch.
    let response = await fetch(requestUrl, requestInit);

    // Get the JSON payload.
    let responseData: MongoResopnseData = await response.json();
    //  console.log("Response Data: ", responseData);

    // Parse out the strongly typed items.
    let items: T[] = this.arraySchema.parse(responseData.documents);
    //  console.log("Response Items: ", items);

    return items;
  }
}
