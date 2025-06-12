import Tiptap from "@/components/admins/blogs/New/TitapEditor";
import React from "react";

function MyNewBlog() {
  return (
    <div className="flex flex-col gap-6">
      <h2>Nouveau blog</h2>
      {/* editor */}
      <Tiptap />
    </div>
  );
}

export default MyNewBlog;
