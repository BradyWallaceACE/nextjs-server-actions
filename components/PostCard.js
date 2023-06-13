"use client";
import React, { useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMyContext } from "@/context/Provider";
import { deletePost } from "@/actions/postActions";

const PostCard = ({ post }) => {
  const { setEditPost } = useMyContext();
  let [isPending, startTransition] = useTransition();

  async function handleDelete(postId) {
    if (window.confirm("Do you want to delete this post?")) {
      await deletePost(postId);
    }
  }

  return (
    <div>
      <Link href="/">
        <Image
          src={post?.image}
          alt="image"
          width={200}
          height={200}
          priority
        />
        <h3>{post?.title}</h3>
      </Link>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => setEditPost(post)}>Edit</button>
        <button
          onClick={() => startTransition(() => handleDelete(post._id))}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
