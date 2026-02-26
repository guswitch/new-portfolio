import Link from "next/link";
import Image from "next/image";
import { GET } from "./api/articles/route";
import { allPosts, Post } from 'contentlayer/generated'
import { parseISO, format, compareDesc } from "date-fns";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link 
          href={post.url} 
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

export default async function Home() {
  const response = await GET();
  const data = await response.json();
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((article: any, index: number) => {
        return (
        <div key={index} className="border p-4 rounded">
          <Image src={article.author.avatar} alt={article.author.avatar} width={50} height={50} className="rounded-full mb-2" />
          <h2 className="text-2xl font-bold">{article.title}</h2>
          <p className="text-gray-600">{article.author.name}</p>
        </div>
        )
      })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </div>
      <Link href="/about-me" className="text-blue-500 hover:underline">
        About Me
      </Link>
    </>
  );
}
