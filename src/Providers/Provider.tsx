"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import toast, { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const publicRoute = pathName === "/login" || pathName === "/register";

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      {children}
    </div>
  );
};

export default Provider;
