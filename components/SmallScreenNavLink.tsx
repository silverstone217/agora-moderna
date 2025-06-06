"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify, LogOut } from "lucide-react";
import { LinksHome } from "@/utils/data";
import Link from "next/link";
import { hostGrotesk } from "@/lib/fonts";
import UserAvatar from "./UserAvatar";
import { Button } from "./ui/button";
import useGetUser from "@/hooks/getUser";
import { toast } from "sonner";
import { signOut } from "next-auth/react";

const SmallScreenNavLink = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent className="w-[85%] h-svh overflow-x-hidden overflow-y-auto">
        <SheetHeader>
          <SheetTitle className={`${hostGrotesk.className} font-extrabold`}>
            Agora Moderna
          </SheetTitle>
          <SheetDescription>
            Meilleur plateforme de lecture de blogs, retrouvez vos genres
            préférés.
          </SheetDescription>
        </SheetHeader>

        {/* content */}
        <div className="flex-1 pb-4  w-full flex flex-col justify-between gap-4">
          {/* links */}
          <div className="flex flex-col gap-4 flex-1 border-y p-4">
            {LinksHome.map((link, index) => (
              <Link href={link.value} key={index}>
                <div className="flex items-center w-full p-2 gap-4">
                  <link.icon className="shrink-0" />
                  <span className="font-medium">{link.label}</span>
                </div>
              </Link>
            ))}
          </div>
          {/* login and profile */}
          <div className="flex items-center justify-end gap-4 px-4">
            {/* log out */}
            <LogOutButton />
            {/* profile */}
            <UserAvatar />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SmallScreenNavLink;

export const LogOutButton = () => {
  const { user } = useGetUser();

  if (!user) return null;

  const handleLogout = async () => {
    try {
      await signOut();

      setTimeout(() => toast.success("Vous avez été deconnecté!"), 1000);
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
      toast.error("Erreur survenue", {
        description: "Impossible de vous deconnecter, ressayer plus tard!",
      });
    }
  };

  return (
    <Button onClick={handleLogout} variant={"destructive"}>
      <LogOut />
    </Button>
  );
};
