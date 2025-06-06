"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const AuthButton = () => {
  const router = useRouter();

  const handleSubmitWithGoogle = async () => {
    try {
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
    <AlertDialog>
      <AlertDialogTrigger>
        <Tooltip>
          <TooltipTrigger className=" items-center flex justify-center" asChild>
            <LogIn className="text-primary" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Connexion</p>
          </TooltipContent>
        </Tooltip>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Indentification</AlertDialogTitle>
          <AlertDialogDescription>
            Indentifiez-vous pour acceder à plus de fonctionnalités disponibles
            sur la plateforme.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
            className="flex items-center gap-4"
            onClick={handleSubmitWithGoogle}
          >
            <FcGoogle />
            <span>Continuer avec Google</span>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AuthButton;
