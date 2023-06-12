"use server";
import connectDB from "@/database/mongodb";
import Post from "@/models/postModel";
import { revalidatePath } from "next/cache";

connectDB();

export async function createPost(data) {
  try {
    const newPost = new Post(data);
    await newPost.save();

    revalidatePath("/");

    return { ...newPost._doc, id: newPost._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to create post!");
  }
}

export async function getAllPosts() {
  try {
    const posts = await Post.find();

    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));

    return { posts: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to retrieve posts!");
  }
}
