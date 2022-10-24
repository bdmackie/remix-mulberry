import { json, redirect } from "@remix-run/node";
// import { SignIn } from '@clerk/remix'
import type { MetaFunction, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";

import { genMeta } from "~/meta";
import { setAppServices } from "context";

import type { Post } from "services/post.service";

export const meta: MetaFunction = genMeta("Home");
export const handle = { screenName: "Blog" };

type LoaderData = {
  posts: Post[];
};

// const postData : Array<Post> = [
//   { _id: '1', title: 'Blog post A', body: 'Lorum Ipsum' },
//   { _id: '2', title: 'Blog post B', body: 'Lorum Ipsum' },
//   { _id: '3', title: 'Blog post C', body: 'Lorum Ipsum' },
// ]

export const loader = async ({ request, context }: LoaderArgs) => {
  const { userId } = await getAuth(request);
  if (!userId) {
    return redirect("/sign-in");
  }
  const data: LoaderData = {
    posts: await setAppServices(context).post.getPosts(),
  };
  return json(data);
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div>
      <div className="mt-6 flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post._id} className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a href="/" className="hover:underline focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {post.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="/"
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </div>
  );
}
