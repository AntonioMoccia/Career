"use client";
import React from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/context/auth-provider";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const onLogout = () => {

    logout();
    router.push("/login");
  };

  return <Button onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
