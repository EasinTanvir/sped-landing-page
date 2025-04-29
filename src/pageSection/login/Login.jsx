"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@/i18n/routing";

import InputField from "@/components/shared/InputFIeld";

const LogIn = () => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const loginHandler = async (data) => {};

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[460px] w-full shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-center font-montserrat font-bold lg:text-3xl text-2xl text-colors-heading">
            Login
          </h1>
        </div>
        <hr className="mt-2 mb-5 text-black" />

        <div className="flex flex-col gap-3">
          <InputField
            label="UserName"
            required
            id="username"
            type="text"
            message="*UserName is required"
            placeholder="Enter your username"
            register={register}
            errors={errors}
          />
          <InputField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />
        </div>
        <button
          disabled={loader}
          className="bg-colors-button flex gap-2 items-center justify-center font-semibold text-white  w-full py-2  rounded-sm my-3"
          type="submit"
        >
          {loader ? <>Loading...</> : "Login"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Don't have an account?
          <Link
            className="font-semibold underline hover:text-black"
            href="/register"
          >
            <span className="text-btnColor"> SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
