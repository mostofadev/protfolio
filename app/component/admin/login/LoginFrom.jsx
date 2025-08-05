"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "@/app/component/core/Loading";
import { useAuth } from "@/app/context/AuthContext";
import Input from "../../core/Admin/From/Input";
import FormButton from "../../core/Admin/From/Button";
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginFrom() {
  const { login, loading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("auth-token");
    if (token) {
      router.push("/admin/dashboard");
    } else {
      setPageLoading(false);
    }
  }, [router]);

  const onSubmit = async (data) => {
    setFormLoading(true);
    setError('');
    try {
      await login(data.email, data.password);
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setFormLoading(false);
    }
  };

  // if (!isClient || pageLoading) return <Loading />;

  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your admin account
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="mt-1">
                  <Input
                    label="Email"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                
                </div>
              </div>

              <div>
                
                <div className="mt-1">
                  <Input
                    label="Password"
                    type="password"
                    {...register("password")}
                    error={errors.password?.message}
                  />
                </div>
              </div>

              <div>
                <FormButton loading={loading} type="submit">
                    Log In
                </FormButton>
              </div>
            </form>

            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Secure admin portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
