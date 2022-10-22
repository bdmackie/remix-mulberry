import { z } from "zod";

import type { IUserService } from "services/user.service";
import type { IPostService } from "services/post.service";
import type { IMongoApiInit } from "services/mongoapi";

import { UserService } from "services/user.service";
import { PostService } from "services/post.service";

export let envSchema = z.object({
	MONGO_API_KEY: z.string().min(1),
	MONGO_APP_ID: z.string().min(1),
	MONGO_DATABASE_NAME: z.string().min(1),
	MONGO_CLUSTER_NAME: z.string().min(1),
	NODE_ENV: z
		.union([
			z.literal("test"),
			z.literal("development"),
			z.literal("production"),
		])
		.default("development"),
});

export type Env = z.infer<typeof envSchema>

export interface IAppServices {
	user: IUserService;
	post: IPostService;	
}
export interface IAppContext {
	env: Env;
	services: IAppServices;
}

export function setAppContext(context: any) : IAppContext {
	if (context.services)
		return context as IAppContext;
	// console.log("SETAPPCONTEXT")

	// Environment variables
	let env: Env = envSchema.parse(process.env);
	context.env = env;
	// console.log("NODE_ENV: " + env.NODE_ENV)

	// Reused MongoDB API initial data
	let mongoApiInit: IMongoApiInit = {
		apiKey: env.MONGO_API_KEY,
		appId: env.MONGO_APP_ID,
		clusterName: env.MONGO_CLUSTER_NAME,
		databaseName: env.MONGO_DATABASE_NAME,
	};

	// Injected services objects to interact with third-party services
	let user = new UserService(mongoApiInit);
	let post = new PostService(mongoApiInit);
	context.services = {
		user,
		post
	}

	return context as IAppContext;
}

export function setAppServices(context: any) : IAppServices {
	return setAppContext(context).services;
}