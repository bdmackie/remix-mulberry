import { z } from "zod";
import { MongoApi } from "./mongoapi";
import type { IMongoApiInit } from "./mongoapi";

// Create types with zod so we can parse objects.
export let postSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(1),
  body: z.string().optional(),
});
export type Post = z.infer<typeof postSchema>;
let postArraySchema = z.array(postSchema);

// Service interface
export interface IPostService {
  getPosts(): Promise<Post[]>;
}

// Service implementation class
export class PostService implements IPostService {
  private mongoApi : MongoApi<Post>

  constructor(
    mongoApiInit: IMongoApiInit
  ) {
    this.mongoApi = new MongoApi<Post>(mongoApiInit, postSchema);
  }

  async getPosts(): Promise<Post[]> {
    let documents = await this.mongoApi.find("posts");
    let posts = postArraySchema.parse(documents);
    return posts;
  }
}