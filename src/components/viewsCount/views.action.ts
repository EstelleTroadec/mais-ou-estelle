"use server";

import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

// Function to increment the view count for a given post
export const incrementViews = async (
  slug: string
): Promise<{ views: number }> => {
  // Get the list of cookies from the request
  const cookieList = await cookies();
  
  // Check if there is a cookie indicating that the post has already been viewed
  const currentPostCookieDate = cookieList.get(`postview:${slug}`)?.value;
  
  // Key to store the view count in Redis
  const KEY = `postview:${slug}`;

  // If the post has already been viewed (cookie exists), return the current view count
  if (currentPostCookieDate) {
    return {
      views: Number(await redis.get(KEY)),
    };
  }

  // If the post has not been viewed yet, increment the view count in Redis
  const newViewCount = await redis.incr(KEY);
  
  // Set a cookie to indicate that the post has been viewed
  cookieList.set(`postview:${slug}`, new Date().toISOString(), {
    path: "/", // Cookie is valid for the entire site
    maxAge: 60 * 60 * 12, // Cookie expires 12 hours (for testing purposes)
    httpOnly: true, // Cookie is not accessible via JavaScript
  });

  // Return the new view count
  return { views: Number(newViewCount) };
};
