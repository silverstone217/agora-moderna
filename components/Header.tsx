"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { hostGrotesk } from "@/lib/fonts";
import { LinksHome } from "@/utils/data";
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";
import ToggleTheme from "./ToggleTheme";
import AuthFormDialog from "./auth/AuthFormDialog";
import useGetUser from "@/hooks/useGetUser";
import AvatarComponent from "./AvatarComponent";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useGetUser();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ redirectTo: "/" });
      router.refresh();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erreur survenue", {
        description: "Veuillez reesayer plus tard!",
      });
    }
  };

  return (
    <header
      className={`fixed z-50 bg-background w-full
        border-b shadow flex flex-col overflow-hidden
        ${isOpen ? "h-svh" : "h-14"}
        transition-all duration-500 ease-in-out
    `}
    >
      {/* container */}
      <div
        className={`flex items-center w-full max-w-7xl 
            mx-auto px-4 lg:px-6 xl:px-8 py-2 justify-between
            transition-all duration-500 ease-in-out gap-6
            `}
      >
        {/* left side */}
        <div className="flex items-center gap-6">
          {/* logo */}
          <Link href={"/"} onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-1.5">
              <Image
                src={logo}
                alt="Logo"
                width={500}
                height={500}
                priority
                className="h-10 w-10 object-cover shrink-0"
              />
              <span
                className={`${hostGrotesk.className} hidden
                font-extrabold text-lg text-primary lg:block
                transition-all duration-300 ease-in-out
                `}
              >
                Agora Moderna
              </span>
            </div>
          </Link>

          {/* menu links */}
          <nav className="lg:flex items-center gap-2.5 hidden">
            {LinksHome.map((lk, idx) => (
              <Link
                href={lk.value}
                key={idx}
                className={`font-medium hover:opacity-75
                transition-all duration-300 ease-in-out
              `}
                onClick={() => setIsOpen(false)}
              >
                <span>{lk.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* right side */}
        <div className="flex items-center gap-4">
          <div className="lg:flex items-center gap-4 hidden">
            {/* sign in btn */}
            {user ? (
              <Link href={"#"} onClick={handleSignOut}>
                <AvatarComponent />
              </Link>
            ) : (
              <AuthFormDialog isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
          </div>

          {/* toggle theme */}
          <ToggleTheme />

          {/* menu open for small screens */}
          <Button
            variant={"outline"}
            size={"lg"}
            onClick={() => setIsOpen(!isOpen)}
            className="transition-all duration-300 ease-in-out lg:hidden"
          >
            {isOpen ? (
              <X className="size-6 transition-all duration-300 ease-in-out" />
            ) : (
              <AlignJustify className="size-6 transition-all duration-300 ease-in-out" />
            )}
          </Button>
        </div>
      </div>
      {/* down part */}
      <SmallScreenNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;

type SmallNavProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
const SmallScreenNav = ({ setIsOpen, isOpen }: SmallNavProps) => {
  const { user } = useGetUser();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ redirectTo: "/" });
      router.refresh();
      setIsOpen(false);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erreur survenue", {
        description: "Veuillez reesayer plus tard!",
      });
    }
  };

  return (
    <div className={` mt-4 w-full lg:hidden flex flex-col gap-4 flex-1 pb-4`}>
      {/* links */}
      <nav className="flex flex-col gap-2.5 w-full px-4 md:px-6 flex-1">
        {LinksHome.map((lk, idx) => (
          <Link
            href={lk.value}
            key={idx}
            className={`font-medium text-lg hover:opacity-75
                transition-all duration-300 ease-in-out
              `}
            onClick={() => setIsOpen(false)}
          >
            <span>{lk.label}</span>
          </Link>
        ))}
      </nav>

      <div className="justify-end flex items-center gap-4 px-4 md:px-6">
        {/* sign up btn */}
        {user ? (
          <Link href={"#"} onClick={handleSignOut}>
            <AvatarComponent />
          </Link>
        ) : (
          <AuthFormDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};
