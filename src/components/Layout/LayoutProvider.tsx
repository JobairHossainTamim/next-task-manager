"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const publicRoute = pathName === "/login" || pathName === "/register";

  const { currentUser } = useSelector((state: any) => state.users);
  const { loading } = useSelector((state: any) => state.loaders);

  return (
    <div>
      <div className="mx-10 bg-primary text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Next</h1>
        <div className="flex gap-2">
          <h1 className="underline cursor-pointer">{currentUser?.username}</h1>
          <i className="ri-logout-box-r-line text-white cursor-pointer"></i>
        </div>
      </div>
      {publicRoute ? (
        <div>{children}</div>
      ) : (
        <div className="h-[80vh] mx-10 mt-5 p-2 border border-gray-300 rounded">
          {children}
        </div>
      )}
    </div>
  );
};

export default LayoutProvider;
