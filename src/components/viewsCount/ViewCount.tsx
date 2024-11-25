"use client";

import useSWR from "swr";
import { incrementViews } from "./views.action";

// Component to display the view count for a specific post
export const ViewCount = ({ slug }: { slug: string }) => {
  // Use SWR to fetch the view count for the given slug
  const viewCount = useSWR(`/viewcount/${slug}`, async () => {
    // Call the incrementViews function to get the updated view count
    return incrementViews(slug);
  });

  // If the view count data is not yet available, return null (don't render anything)
  if (!viewCount.data) {
    return null;
  }

  // Log the view count to the console (for debugging purposes)
  console.log(viewCount.data.views);

  // Render the view count
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">
        {viewCount.data.views} {viewCount.data.views === 1 ? "vue" : "vues"}
      </span>
    </div>
  );
};