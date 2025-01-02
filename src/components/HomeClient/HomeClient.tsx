"use client";

import { SetCurrentUser } from "@/redux/slice/userSlice";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomeClient = ({ user }: { user: any }) => {
  const pathName = usePathname();
  const publicRoute = pathName === "/login" || pathName === "/register";
  const dispatch = useDispatch();

  useEffect(() => {
    if (!publicRoute) {
      dispatch(SetCurrentUser(user));
    }
  }, []);

  return (
    <div>
      <div>
        Welcome, {user?.username || "Guest"}! This is the home page.
        {user?.email}
      </div>
    </div>
  );
};

export default HomeClient;
