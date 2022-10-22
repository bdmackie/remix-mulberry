import { z } from "zod";
import { MongoApi } from "./mongoapi";
import type { IMongoApiInit } from "./mongoapi";

// Create types with zod so we can parse objects.
export let userSchema = z.object({
  _id: z.string().optional(),
  email: z.string().min(1).email()
});
export type User = z.infer<typeof userSchema>;
let userArraySchema = z.array(userSchema);

// Service interface
export interface IUserService {
  getUsers(): Promise<User[]>;
}

// Service implementation class
export class UserService implements IUserService {
  private mongoApi : MongoApi<User>

  constructor(
    mongoApiInit: IMongoApiInit
  ) {
    this.mongoApi = new MongoApi<User>(mongoApiInit, userSchema);
  }

  async getUsers(): Promise<User[]> {
    let documents = await this.mongoApi.find("users");
    let users = userArraySchema.parse(documents);
    return users;
  }
}