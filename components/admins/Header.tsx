"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import UserAvatar from "../UserAvatar";
import ToggleTheme from "../ToggleTheme";
import { AdminPages } from "@/utils/data";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className="w-full border-b-2 z-50 shadow-2xs
    fixed top-0 left-0 right-0
    "
    >
      {/* container */}
      <div className="flex flex-col gap-1.5 pt-4 px-4 md:px-6 xl:px-8 w-full">
        {/* top */}
        <div className="flex items-center gap-2 justify-between w-full">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              width={400}
              height={400}
              className="size-8 object-cover"
              priority
            />
          </Link>
          <span className="text-sm text-gray-500">/</span>
          <p className="text-sm text-gray-500 mr-4">Dashboard</p>

          <div className="flex-1 flex items-center gap-4 justify-end">
            <ToggleTheme />

            <Link href={"/admins/overview"}>
              <UserAvatar />
            </Link>
          </div>
        </div>

        {/* bottom */}
        <div className="flex items-center gap-4 w-full overflow-x-auto overflow-y-hidden">
          {AdminPages.map((link, index) => (
            <Link
              href={link.value}
              key={index}
              className={`pt-1 pb-1.5 border-b-3 border-background shrink-0 font-medium
                ${
                  pathname === link.value ? "border-b-primary" : "text-gray-500"
                }
            `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
