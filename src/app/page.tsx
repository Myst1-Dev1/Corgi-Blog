import { Intro } from "@/components/home/intro";
import { Posts } from "@/components/home/posts";
import { PostTypes } from "@/components/home/postTypes";
import { Pagination } from "@/components/pagination";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="container py-8">
        <h2 className="font-bold mb-3 text-2xl">Blog</h2>
        <p className="text-gray-500 font-medium">Nosso blog foi feito dedicado a abordar temas que envolvem essa raça de cachorros conhecida como Corgi.</p>
      </div>
      <PostTypes />
      <Posts />
      <Pagination />
    </>
  );
}
