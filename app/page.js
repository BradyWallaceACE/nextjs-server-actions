import React from "react";
import PostForm from "../components/PostForm";
import { getAllPosts } from "@/actions/postActions";
import PostList from "@/components/PostList";
import Feature from "@/components/Feature";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const Home = async ({ params, searchParams }) => {
  const { posts, totalPage } = await getAllPosts(searchParams);

  return (
    <div>
      <h1>
        <Link href="/">NextJS 13.4 Server Actions + MongoDB(mongoose)</Link>
      </h1>
      <h2>C.R.U.D + Sort + Search + Pagintion</h2>

      <PostForm />

      <Feature />

      {posts && <PostList posts={posts} />}

      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  );
};

export default Home;
