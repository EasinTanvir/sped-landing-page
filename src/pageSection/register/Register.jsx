"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import InputField from "@/components/shared/InputFIeld";
import { Link } from "@/i18n/routing";

const Register = () => {
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[460px] w-full  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="text-center font-montserrat font-bold lg:text-3xl text-2xl text-colors-heading">
            Register
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
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Enter your email"
            register={register}
            errors={errors}
          />
          <InputField
            label="Password"
            required
            id="password"
            min={6}
            type="password"
            message="*Password is required"
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />

          <InputField
            label="Confirm Password"
            required
            id="confirmPassword"
            type="password"
            message="*Confirm Password is required"
            placeholder="Confirm your password"
            register={register}
            errors={errors}
            validate={(value) => value === password || "Passwords do not match"}
          />
        </div>
        <button
          disabled={loader}
          className="bg-colors-button flex gap-2 items-center justify-center font-semibold text-white  w-full py-2  rounded-sm my-3"
          type="submit"
        >
          {loader ? <>Loading...</> : "Register"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Already Have An Account?
          <Link
            className="font-semibold underline hover:text-black"
            href="/login"
          >
            <span className="text-btnColor">LogIn</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
