"use client";
import Image from "next/image";
import { Button, Checkbox, Input } from "../../../../components/page";
import { useForm } from "react-hook-form";

import { API_SERVICES_URLS, FORM_VALIDATION } from "../../../../data/page";
import { getFieldHelperText } from "../../../../utils/page";
import { useState } from "react";

import Link from "next/link";
import { apple, google, user } from "../../../../../public/images/page";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SignInFormInputsType } from "../../types/page";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
} = useForm<SignInFormInputsType>();

      const [errorMessage, setErrorMessage] = useState<string | null>(null);
      const router = useRouter();

      const onSubmit = handleSubmit(async (data) => {
        try {
          const response = await axios.post(API_SERVICES_URLS.SIGN_IN, data);
          if (response.status === 200) {
            console.log("Login successful", response.data);
            localStorage.setItem("authData", JSON.stringify(response.data.data));
            
            router.push("/dashboard");
          }
        } catch (error: any) {
          console.error("Login failed", error.response?.data || error.message);
          setErrorMessage("Invalid Log In Credentials");
        }
});
  return (
    // <form className="  w-full " onSubmit={onSubmit}>
    <div className="min-h-screen w-full flex items-center justify-center">
      <form className="  w-[500px]  rounded-lg shadow  py-10 px-[40px]   mt-10   flex-col items-center justify-center">
        <h1 className="font-Kalnia text-3xl font-bold text-primary">Login</h1>
        <h1 className="my-3 text-primary  ">Enjoy an unforgettable Vacation</h1>
        <div className="  ">
        <label
          htmlFor="email"
          className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-6 focus-within:border-blue-600"
        >
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Email
          </span>
        </label>
        <label
          htmlFor="password"
          className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-6 focus-within:border-blue-600"
        >
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Password
          </span>
        </label>
        <div className="flex justify-between items-center font-Sans my-5">
          <div className="flex items-center text-darkSecondary text-[14px]">
            <Checkbox /> <span className="px-2">Remember me</span>
          </div>
          <Link
            href={"#"}
            className="text-primary  font-Sans  text-[14px] underline "
          >
            Forget Password?
          </Link>
        </div>
        <Button
          className="bg-primary text-white w-full font-abel mt-10"
          type="submit"
          buttonLoadingProps={{ loadingText: "Login In..." }}
          loading={isSubmitting}
        >
          Login
        </Button>
        <div className="flex justify-between items-center font-Sans">
          <div className="">
            <Button
              className="bg-white text-primary w-[200px] font-abel  border border-primary"
              type="submit"
              buttonLoadingProps={{ loadingText: "Login In..." }}
              loading={isSubmitting}
            >
              <div className="flex items-center gap-2">
                <Image src={google} alt="google" width={20} height={20} />
                Login with Google
              </div>
            </Button>
          </div>

          <div className="">
            <Button
              className="bg-white border border-primary text-primary w-[200px] font-abel my-10"
              type="submit"
              buttonLoadingProps={{ loadingText: "Login In..." }}
              loading={isSubmitting}
            >
              <div className="flex items-center gap-2">
                <Image src={apple} alt="apple" width={20} height={20} />
                Login with Apple
              </div>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <div className="h-[1px] w-full bg-h4Color"></div>
          <span className="text-darkSecondary text-[14px] whitespace-nowrap">
            Or
          </span>
          <div className="h-[1px] w-full bg-h4Color"></div>
        </div>

        <Button
          className="bg-white text-primary w-full border border-primary  font-abel my-10"
          type="submit"
          buttonLoadingProps={{ loadingText: "Login In..." }}
          loading={isSubmitting}
        >
          Create an Account
        </Button>
        {errorMessage && (
          <div className="mt-5 text-sm text-red-500 text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </form>
    </div>
  );
};

export default Login;
