"use client";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const isRegisterDisable = () => {
    return !user.username || !user.password || !user.email;
  };

  const onRegister = () => {
    console.log(user);
  };

  return (
    <div className="bg-primary flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-5 bg-white p-5 w-[500px]">
        <h1 className="text-4xl font-bold uppercase">Register</h1>
        <hr />

        <div className="flex flex-col">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>

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
            isRegisterDisable()
              ? "btn-disable cursor-not-allowed"
              : "btn-primary"
          }
          onClick={onRegister}
          disabled={isRegisterDisable()}
        >
          Register
        </button>

        <Link href="/login" className="underline hover:text-blue-800">
          Already have an account ?
        </Link>
      </div>
    </div>
  );
};

export default Register;
