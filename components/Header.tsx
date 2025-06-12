"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
import { LinksHome, Text_color_primary } from "@/utils/data";
import ToggleTheme from "./ToggleTheme";
import { hostGrotesk } from "@/lib/fonts";
// import SmallScreenNavLink from "./SmallScreenNavLink";
// import AuthButton from "./AuthButton";
// import useGetUser from "@/hooks/getUser";
import UserAvatar from "./UserAvatar";
import { usePathname } from "next/navigation";

// const NoAllowedLinks = ["/admins"];

const Header = () => {
  // const { user } = useGetUser();
  const pathname = usePathname();

  if (pathname.includes("/admins")) return null;

  return (
    <header
      className="w-full  z-50 shadow-2xs
    fixed top-0 left-0 right-0 backdrop-blur-2xl
    bg-background border-b
    "
    >
      {/* container */}
      <div className="flex flex-col gap-2 pt-4 px-4 md:px-6 xl:px-8 w-full">
        {/* top */}
        <div className="flex items-center gap-1.5 justify-between w-full">
          {/* logo */}
          <Link
            href={"/"}
            className="flex items-center gap-2
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
              className={`hidden lg:block text-base font-extrabold
                ${hostGrotesk.className} text-[${Text_color_primary}]
                transition-all duration-300 ease-in-out
              `}
            >
              Agora Moderna
            </span>
          </Link>

          <div className="flex-1 flex items-center gap-4 justify-end">
            <ToggleTheme />

            <Link href={"/admins/overview"}>
              <UserAvatar />
            </Link>
          </div>
        </div>

        {/* bottom */}
        <div className="flex items-center gap-4 w-full overflow-x-auto overflow-y-hidden">
          {LinksHome.map((link, index) => (
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

// const ReturLinksPage = () => {
//   const { user } = useGetUser();
//   return (
//     <div className="flex items-center gap-4 transition-all duration-300 ease-in-out">
//       {/* links */}
//       {LinksHome.map((link, index) => (
//         <Link href={link.value} key={index}>
//           <Tooltip>
//             <TooltipTrigger>
//               <link.icon />
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>{link.label}</p>
//             </TooltipContent>
//           </Tooltip>
//         </Link>
//       ))}

//       {/* theme */}
//       <ToggleTheme />

//       {/* login */}
//       {user ? (
//         <Link href={"/admins/overview"}>
//           <UserAvatar />
//         </Link>
//       ) : (
//         <AuthButton />
//       )}
//     </div>
//   );
// };
