import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function MyBlogs() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex items-center justify-between flex-wrap">
        <h1 className="font-bold text-lg shrink-0">Mes blogs</h1>
        {/* add new */}
        <Link href={"/admins/blogs/nouveau"}>
          <Button className="px-8 py-5 flex items-center justify-center gap-2">
            <PlusCircle />
            <span>Nouveau</span>
          </Button>
        </Link>
      </div>

      {/* table */}
      <p>Listes</p>
    </div>
  );
}

export default MyBlogs;
