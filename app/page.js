import React from "react";
import PostForm from "../components/PostForm";
import { getAllPosts } from "@/actions/postActions";
import PostList from "@/components/PostList";

const Home = async () => {
  const { posts } = await getAllPosts();

  return (
    <div>
      <h1>NextJS 13.4 Server Actions + MongoDB(mongoose)</h1>
      <h2>C.R.U.D + Sort + Search + Pagintion</h2>

      <PostForm />

      {posts && <PostList posts={posts} />}
    </div>
  );
};

export default Home;
