"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useGetUser from "@/hooks/getUser";

const UserAvatar = () => {
  const { user } = useGetUser();

  if (!user) return null;

  const ShortName = (user.name || user.email?.split("@")[0] || "NN")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Avatar>
      {user.image && <AvatarImage src={user.image} />}
      <AvatarFallback>{ShortName}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
