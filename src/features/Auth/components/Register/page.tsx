"use client";
import Image from "next/image";
import { Button, Checkbox, Input } from "../../../../components/page";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { apple, google } from "../../../../../public/images/page";
import { useState } from "react";
import { SignInFormInputsType } from "../../types/page";
import { useAuth } from "@/components/AuthProvider/page";
import { useRouter } from "next/navigation";
import { API_SERVICES_URLS, FORM_VALIDATION } from "@/data/page";
import axios from "axios";
// import { getFieldHelperText } from "@/utils/page";

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormInputsType>();

          const [errorMessage, setErrorMessage] = useState<string | null>(null);
          const router = useRouter();

          const onSubmit = handleSubmit(async (data) => {
            try {
              const response = await axios.post(API_SERVICES_URLS.SIGN_UP, data);
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
    <div className="min-h-screen w-full flex items-center justify-center">
      <form
        className="w-[500px] rounded-lg shadow py-10 px-[40px] my-10 flex-col items-center justify-center"
        onSubmit={ onSubmit}
      >
        <h1 className="font-Kalnia text-3xl font-bold text-primary">
          Create Account
        </h1>
        <h1 className="my-3 text-primary">Start an unforgettable Vacation</h1>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2 ">
            <label
              htmlFor="firstname"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="firstname"
                placeholder="firstname"
                {...register("firstname", { required: true })}
                defaultValue={""}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                First Name
              </span>
            </label>

            <label
              htmlFor="lastName"
              className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-3 focus-within:border-blue-600"
            >
              <input
                type="text"
                id="lastName"
                placeholder="Name"
                defaultValue={""}
                {...register("lastname", { required: true })}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Last Name
              </span>
            </label>
          </div>
          <label
            htmlFor="email"
            className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-6 focus-within:border-blue-600"
          >
            <input
                type="email"
                id="email"
              placeholder="Email"
              defaultValue={""}
              {...register("email", FORM_VALIDATION.email)}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Email
            </span>
          </label>

          <label
            htmlFor="phone"
            className="relative block overflow-hidden border-b border-h4Color bg-transparent pt-6 focus-within:border-blue-600"
          >
            <input
              type="number"
              id="phone"
              placeholder="Phone"
              defaultValue={""}
              {...register("phone", { required: true })}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Phone
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
              defaultValue={""}
              {...register("password", { required: true })}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-h4Color text-h6color transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Enter Password
            </span>
          </label>

          <div className="flex items-center font-abel my-5">
            <div className="flex items-center text-darkSecondary text-[15px] gap-1 justify-center">
              <Checkbox {...register("agree")} className="mr-1" /> I agree to
              the
              <Link
                href="/terms-and-conditions"
                className="flex items-center text-primary underline font-bold font-Sans"
              >
                <span className=""> Terms & Conditions</span>
              </Link>
              <span className="">,</span>
              <Link
                href="/privacy-policy"
                className="flex underline font-bold items-center font-Sans text-primary"
              >
                <span className=""> Privacy Policy</span>
              </Link>
            </div>
          </div>

          <Button
            className="bg-primary text-white w-full font-abel mt-10"
            type="submit"
            buttonLoadingProps={{ loadingText: "Registering..." }}
            loading={isSubmitting}
          >
            Send OTP
          </Button>

          <div className="flex justify-between items-center font-Sans">
            <div className="">
              <Button
                className="bg-white text-primary w-[200px] font-abel border border-primary"
                type="submit"
                buttonLoadingProps={{ loadingText: "Registering..." }}
                loading={isSubmitting}
              >
                <div className="flex items-center gap-2">
                  <Image src={google} alt="google" width={20} height={20} />
                  Sign up with Google
                </div>
              </Button>
            </div>

            <div className="">
              <Button
                className="bg-white border border-primary text-primary w-[200px] font-abel my-10"
                type="submit"
                buttonLoadingProps={{ loadingText: "Registering..." }}
                loading={isSubmitting}
              >
                <div className="flex items-center gap-2">
                  <Image src={apple} alt="apple" width={20} height={20} />
                  Sign up with Apple
                </div>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-full bg-h4Color"></div>
            <span className="text-darkSecondary text-[14px] whitespace-nowrap">
              Or
            </span>
            <div className="h-[1px] w-full bg-h4Color"></div>
          </div>

          <div className="flex items-center justify-center gap-1 font-bold font-Sans text-primary mt-5">
            Already have an account?
            <Link href="/login">
              <span className="underline text-primary font-bold">Login</span>
            </Link>
          </div>

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

export default Register;
