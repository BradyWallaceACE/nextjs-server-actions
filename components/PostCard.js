import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
