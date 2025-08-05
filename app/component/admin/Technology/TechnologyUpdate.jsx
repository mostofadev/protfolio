"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Input from "../../core/Admin/From/Input";
import FormButton from "../../core/Admin/From/Button";
import { useTechnologyContext } from "@/app/context/TechnologyContext";
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

export default function TechnologyUpdate({ id }) {
  const router = useRouter();
  const {
    singleTechnology,
    loading,
    updateTechnologyHandle,
    getSingleTechnologyHandle,
  } = useTechnologyContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (id) getSingleTechnologyHandle(id);
  }, [id]);

  useEffect(() => {
    if (singleTechnology) {
      reset({
        name: singleTechnology.name,
      });
    }
  }, [singleTechnology, reset]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("_method", "PATCH");

    try {
      const res = await updateTechnologyHandle(id, formData);
      if (res?.status === true) {
        showCustomToast({
          title: "Technology Updated",
          message: "Technology updated successfully!",
          type: "success",
        });
        router.push("/admin/technology");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Name" {...register("name")} error={errors.name?.message} />
      <FormButton loading={loading}>Update Technology</FormButton>
    </form>
  );
}
