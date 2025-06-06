"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinksHome } from "@/utils/data";
import ToggleTheme from "./ToggleTheme";
import { hostGrotesk } from "@/lib/fonts";
import SmallScreenNavLink from "./SmallScreenNavLink";
import AuthButton from "./AuthButton";
import useGetUser from "@/hooks/getUser";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const { user } = useGetUser();
  return (
    <header
      className="lg:max-w-md p-4 border rounded-lg 
    fixed lg:left-1/2 lg:transform lg:-translate-x-1/2 top-4 lg:w-full
    left-4 right-4 shadow-2xs z-50 backdrop-blur-xl
    transition-all duration-300 ease-in-out
    "
    >
      <div className="lg:w-full flex items-center gap-4 justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-1.5
        transition-all duration-300 ease-in-out
        "
        >
          <Image
            src={logo}
            alt="Logo"
            width={400}
            height={400}
            className="size-8 object-cover"
            priority
          />
          <span
            className={`hidden lg:block text-sm font-extrabold
          ${hostGrotesk.className} text-primary
          transition-all duration-300 ease-in-out
            `}
          >
            Agora Moderna
          </span>
        </Link>

        {/* links */}
        <div className="hidden lg:block">
          <ReturLinksPage />
        </div>

        {/* small screen */}
        <div
          className="flex items-center gap-4 lg:hidden
        transition-all duration-300 ease-in-out
        "
        >
          {/* login */}
          {!user && <AuthButton />}

          {/* theme */}
          <ToggleTheme />

          {/* Menu */}
          <SmallScreenNavLink />
        </div>
      </div>
    </header>
  );
};

export default Header;

const ReturLinksPage = () => {
  const { user } = useGetUser();
  return (
    <div className="flex items-center gap-4 transition-all duration-300 ease-in-out">
      {/* links */}
      {LinksHome.map((link, index) => (
        <Link href={link.value} key={index}>
          <Tooltip>
            <TooltipTrigger>
              <link.icon />
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.label}</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      ))}

      {/* theme */}
      <ToggleTheme />

      {/* login */}
      {user ? <UserAvatar /> : <AuthButton />}
    </div>
  );
};
