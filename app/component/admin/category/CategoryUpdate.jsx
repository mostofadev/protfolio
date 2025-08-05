"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Input from "../../core/Admin/From/Input";
import FormButton from "../../core/Admin/From/Button";
import { useBlogContext } from "@/app/context/BlogContext";
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";
import { useCategoryContext } from "@/app/context/CategoryContext";

const articleSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export default function CategoryUpdate({ id }) {
  const router = useRouter();
  const {
    singleCategory,
    loading,
    error,
    updateCategoryHandle,
    getSingleCategoryHandle,
  } = useCategoryContext();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(articleSchema),
  });

  
  useEffect(() => {
    if (id) getSingleCategoryHandle(id);
  }, [id]);

  useEffect(() => {
    if (singleCategory) {
      reset({
        name: singleCategory.name,
      });
    }
  }, [singleCategory, reset]);

  


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("_method", "PATCH");
    try {
      const res = await updateCategoryHandle(id, formData);
      if (res?.status === true) {
        showCustomToast({
          title: "Category Updated",
          message: "Category updated successfully!",
          type: "success",
        });
        router.push("/admin/category");
      }
    } catch (err) {
      console.error("Update error:", err);
    } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <FormButton loading={loading}>Update Category</FormButton>
    </form>
  );
}
