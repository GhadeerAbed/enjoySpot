"use client";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Input,
  MainInput,
} from "../../../../components/page";
import { useForm } from "react-hook-form";
import { API_SERVICES_URLS } from "../../../../data/page";
import { useState } from "react";
import Link from "next/link";
import { apple, google } from "../../../../../public/images/page";
import { useRouter } from "next/navigation";
import { SignInFormInputsType } from "../../types/page";
import { useSWRMutationHook } from "@/hooks/page";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputsType>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const { customTrigger, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.SIGN_IN,
    "POST"
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await customTrigger(data);

      if (response.status === 200 && response.data?.isSuccess) {
        const { isAuthenticated, token, userName, roles, supportedLanguages } =
          response.data.data;

        if (isAuthenticated) {
          localStorage.setItem(
            "authData",
            JSON.stringify({
              token,
              userName,
              roles,
              supportedLanguages,
            })
          );

          console.log("Login successful:", response.data.data);
          router.push("/dashboard"); // Redirect to dashboard
        } else {
          setErrorMessage("Authentication failed. Please try again.");
        }
      } else {
        throw new Error(response.data.message || "Unexpected error occurred");
      }
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      setErrorMessage("Invalid Login Credentials");
    }
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[450px] rounded-lg shadow-lg py-6 px-10">
        <form onSubmit={onSubmit}>
          <h1 className="font-Kalnia text-3xl font-bold text-primary">Login</h1>
          <h1 className="text-primary text-lg mb-3">
            Start an unforgettable Vacation
          </h1>

          <MainInput
            type="text"
            {...register("userName", { required: "User Name is required" })}
            error={!!errors.userName}
            placeholder="User Name"
            className="!mb-5"
          />
          <MainInput
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            placeholder="Password"
            className="!mt-3"
          />

          <div className="flex justify-between items-center text-primary text-sm my-5">
            <div className="flex items-center">
              <Checkbox /> <span className="px-2">Remember me</span>
            </div>
            <Link href={"#"} className="underline">
              Forget Password?
            </Link>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <Button
            className="bg-primary text-white w-full font-abel mt-10"
            type="submit"
            buttonLoadingProps={{ loadingText: "Logging In..." }}
            loading={isMutating}
          >
            LOGIN
          </Button>
        </form>

        <div className="my-8 grid sm:grid-cols-2 gap-4 grid-cols-1">
          <Button
            className="bg-white text-primary border border-primary"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Image src={google} alt="google" width={20} height={20} />
              <span className="truncate">Login with Google</span>
            </div>
          </Button>

          <Button
            className="bg-white text-primary border border-primary"
            type="button"
          >
            <div className="flex items-center gap-2">
              <Image src={apple} alt="apple" width={20} height={20} />
              <span className="truncate">Login with Apple</span>
            </div>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-full bg-h4Color"></div>
          <span className="text-h4Color text-sm font-medium">Or</span>
          <div className="h-[1px] w-full bg-h4Color"></div>
        </div>

        <Button className="bg-white text-primary w-full border-primary my-8">
          Create an Account
        </Button>
      </div>
    </div>
  );
};

export default Login;
