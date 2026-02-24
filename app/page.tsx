import Link from "next/link";
import Image from "next/image";
import { GET } from "./api/articles/route";

export default async function Home() {
  const response = await GET();
  const data = await response.json();
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
      <Link href="/about-me" className="text-blue-500 hover:underline">
        About Me
      </Link>
    </>
  );
}
