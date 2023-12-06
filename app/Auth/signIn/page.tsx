"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AuthHeader from "@/components/AuthHeader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/fireBase";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const logInUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorMessage}- Code is ${errorCode}`);
      });
  };
  return (
    <main className="relative md:container mx-auto">
      <AuthHeader />
      <div className="flex w-full flex-col items-center mt-20">
        <h2 className="font-semibold text-2xl leading-7 mb-10">Sign In</h2>
        <form className="flex w-4/5 sm:max-w-md justify-center flex-col">
          <label className="text-sm  font-semibold">Email address</label>
          <input
            className="p-2 outline-none rounded-md bg-[#f2f2f2] mt-2 mb-4"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-sm  font-semibold">Password</label>
          <input
            className="p-2 outline-none rounded-md bg-[#f2f2f2] mt-2 mb-4"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="my-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-base">
              <input type="checkbox" />
              <label className="">Keep me sign in</label>
            </div>
            <Link href="/">
              <h4 className="text-[#2f80ed] text-sm">Forget Password?</h4>
            </Link>
          </div>
          <button
            className="bg-[#2f80ed] rounded-md p-2 text-white text-center"
            onClick={(e) => logInUser(e)}
          >
            Continue with email
          </button>
          <div className="flex items-center my-6">
            <div className="flex-1 h-[2px] bg-[#f2f2f2]"></div>
            <h2 className="py-0 px-3 text-base">or use one of the options</h2>
            <div className="flex-1 h-[2px] bg-[#f2f2f2]"></div>
          </div>
          <button
            type="submit"
            className="border my-4 border-[#f2f2f2] rounded-md p-2 text-black text-center text-base"
          >
            Continue with google
          </button>
          <button
            type="submit"
            className="border border-[#f2f2f2] rounded-md p-2 text-white text-center bg-[#314A86]"
          >
            Continue with facebook
          </button>
          <div className="my-8">
            <h2 className="text-center text-base">
              Don't have an account?{" "}
              <Link href="/" className="text-[#2f80ed] text-base">
                Register
              </Link>
            </h2>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
