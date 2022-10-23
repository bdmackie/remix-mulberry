import { json, redirect } from "@remix-run/node"
// import { SignIn } from '@clerk/remix'
import type { MetaFunction, LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { getAuth } from "@clerk/remix/ssr.server";

import { genMeta } from '~/meta';
import { setAppServices } from "context";

import type { Post } from 'services/post.service'

export const meta: MetaFunction = genMeta('Home');
export const handle = { screenName: "Blog" };

type LoaderData = {
  posts: Post[]
}

// const postData : Array<Post> = [
//   { _id: '1', title: 'Blog post A', body: 'Lorum Ipsum' },
//   { _id: '2', title: 'Blog post B', body: 'Lorum Ipsum' },
//   { _id: '3', title: 'Blog post C', body: 'Lorum Ipsum' },
// ]


export const loader = async ({ request, context }: LoaderArgs) => {
  const { userId } = await getAuth(request);
  if(!userId){
    return redirect("/sign-in");
  }
  const data: LoaderData = {posts: await setAppServices(context).post.getPosts()}
  return json(data)
}

export default function Index() {
  const {posts} = useLoaderData<LoaderData>()
  return (
    <div>
      <ul>
        {posts.map(post => (
            <li key={post.title}>
              <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </li>))}
      </ul>
    </div>
  );
}
