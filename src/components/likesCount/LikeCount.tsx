"use client";

import React, { useState } from "react";
import useSWR from "swr";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { getLikes, incrementLikes, decrementLikes } from "./likes.action";

// Component to display the like count for a specific post
export const LikeCount = ({ slug }: { slug: string }) => {
  // Use SWR to fetch the like count for the given slug
  const { data, mutate } = useSWR(`/api/likes?slug=${slug}`, () => getLikes(slug));

  // State to manage the like status
  const [liked, setLiked] = useState(false);

  // Function to handle like button click
  const handleLike = async () => {
    if (liked) {
      await decrementLikes(slug);
      setLiked(false);
    } else {
      await incrementLikes(slug);
      setLiked(true);
    }
    mutate(); // Re-fetch the like count
  };

  // If the like count data is not yet available, return null (don't render anything)
  if (!data) {
    return null;
  }

  // Render the like count and like button
  return (
    <div className="mt-8 flex items-center gap-2 text-sm">
      <button onClick={handleLike} className="flex items-center gap-1">
        <span>{data.likes}</span>
        {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};