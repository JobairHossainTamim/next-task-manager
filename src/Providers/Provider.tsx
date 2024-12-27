"use client";
import React, { ReactNode } from "react";
import toast, { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      {children}
    </div>
  );
};

export default Provider;
