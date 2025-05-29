"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const AuthFormDialog = ({ setIsOpen }: Props) => {
  const router = useRouter();

  const handleSubmitWithGoogle = async () => {
    try {
      setIsOpen(false);
      await signIn("google");
      // toast.success("Connexion reussie");
      router.refresh();
    } catch {
      toast.error(
        "Impossible de vous connecter avec Google, veuillez réessayer !"
      );
    }
  };

  return (
    <Button
      type="button"
      variant={"outline"}
      className="flex items-center gap-2 justify-center w-full lg:w-fit"
      onClick={handleSubmitWithGoogle}
    >
      <FcGoogle />
      <span>Continuer avec Google</span>
    </Button>
  );
};

export default AuthFormDialog;
