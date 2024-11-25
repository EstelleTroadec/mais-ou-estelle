"use server";

import { redis } from "@/lib/redis";

// Get the number of likes for a given post
export const getLikes = async (slug: string) => {
  const likes = await redis.get(`likes:${slug}`);
  return { likes: likes ? parseInt(likes.toString(), 10) : 0 };
};

// Increment the like count for a given post
export const incrementLikes = async (slug: string) => {
  const likes = await redis.incr(`likes:${slug}`);
  return { likes };
};

// Decrement the like count for a given post
export const decrementLikes = async (slug: string) => {
  const likes = await redis.decr(`likes:${slug}`);
  return { likes };
};