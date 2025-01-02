"use client";
import { SetLoading } from "@/redux/slice/loaderSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const isLoginDisable = () => {
    return !user.password || !user.email;
  };

  const onLogin = async () => {
    try {
      dispatch(SetLoading(true));
      const response = axios.post("/api/users/login", user);
      const result = await response;
      if (result.data) {
        toast.success("login successfully");
        dispatch(SetLoading(false));

        router.push("/home");
      }
      dispatch(SetLoading(false));

      // router.push("/login");
    } catch (error: any) {
      dispatch(SetLoading(false));
      toast.error(error.message);
    } finally {
      dispatch(SetLoading(false));
    }
  };

  return (
    <div className="bg-primary flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-5 bg-white p-5 w-[500px]">
        <h1 className="text-4xl font-bold uppercase">Login</h1>
        <hr />

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <button
          className={
            isLoginDisable() ? "btn-disable cursor-not-allowed" : "btn-primary"
          }
          onClick={onLogin}
          disabled={isLoginDisable()}
        >
          Login
        </button>

        <Link className=" underline hover:text-blue-800" href="/register">
          If you have no account then Register ?
        </Link>
      </div>
    </div>
  );
};

export default Register;
