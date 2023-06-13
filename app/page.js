import React from "react";
import PostForm from "../components/PostForm";
import { getAllPosts } from "@/actions/postActions";
import PostList from "@/components/PostList";
import Feature from "@/components/Feature";

const Home = async ({ params, searchParams }) => {
  const { posts } = await getAllPosts(searchParams);

  return (
    <div>
      <h1>NextJS 13.4 Server Actions + MongoDB(mongoose)</h1>
      <h2>C.R.U.D + Sort + Search + Pagintion</h2>

      <PostForm />

      <Feature />

      {posts && <PostList posts={posts} />}
    </div>
  );
};

export default Home;
