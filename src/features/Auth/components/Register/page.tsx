"use client";
import Image from "next/image";
import { Button, Checkbox, MainInput } from "../../../../components/page";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { apple, google } from "../../../../../public/images/page";
import { SignInFormInputsType } from "../../types/page";
import { useRouter } from "next/navigation";
import { API_SERVICES_URLS } from "@/data/page";
import PhoneInputWithSearch from "@/components/PhoneInput/page";
import { useSWRMutationHook } from "@/hooks/page";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
  } = useForm<SignInFormInputsType>();

  const router = useRouter();
  const { customTrigger, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.SIGN_UP,
    "POST"
  );
  const onSubmit = async (data: SignInFormInputsType) => {
    try {
      const response = await customTrigger(data);
      console.log(response);
      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error: any) {
      console.error("Registration failed", error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[450px] rounded-lg shadow-lg py-6 px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-Kalnia text-3xl font-bold text-primary">
            Create Account
          </h1>
          <h1 className="text-primary text-lg mb-3">
            Start an unforgettable Vacation
          </h1>

          <div className="grid sm:grid-cols-2 gap-5 mt-2">
            <MainInput
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              placeholder="First Name"
              error={!!errors.firstName}
            />
            <MainInput
              type="text"
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              error={!!errors.lastName}
            />
          </div>

          <MainInput
            type="email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            placeholder="Email"
            className="!mb-5"
          />

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <PhoneInputWithSearch {...field} setValue={setValue} />
            )}
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

          <div className="flex items-center text-sm my-7 text-primary">
            <Checkbox className="mr-1" />I agree to
            <Link
              href="/terms-and-conditions"
              className="underline font-medium px-1"
            >
              Terms & Conditions
            </Link>
            ,
            <Link href="/privacy-policy" className="underline font-medium px-1">
              Privacy Policy
            </Link>
          </div>

          <Button
            className="bg-primary text-white w-full mt-8"
            type="submit"
            buttonLoadingProps={{ loadingText: "Registering..." }}
            loading={isSubmitting}
          >
            REGISTER
          </Button>
        </form>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          <Button
            className="bg-white text-primary border-primary"
            type="button"
            buttonSize="small"
          >
            <Link href="" className="flex gap-1">
              <Image src={google} alt="google" />
              <span>Sign up with Google</span>
            </Link>
          </Button>
          <Button
            className="bg-white text-primary border-primary"
            type="button"
          >
            <Link href="" className="flex gap-1">
              <Image src={apple} alt="apple" width={20} height={20} />
              <span>Sign up with Apple</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8 mb-5">
          <div className="h-[1px] w-full bg-h4Color"></div>
          <span className="text-h4Color text-sm font-medium">Or</span>
          <div className="h-[1px] w-full bg-h4Color"></div>
        </div>

        <div className="flex items-center justify-center gap-1 text-primary">
          Already have an account?
          <Link href="/login">
            <span className="underline font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
