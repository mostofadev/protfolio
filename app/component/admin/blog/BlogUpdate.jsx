"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Input from "../../core/Admin/From/Input";
import TextArea from "../../core/Admin/From/TextArea";
import FileInput from "../../core/Admin/From/FileInput";
import FormButton from "../../core/Admin/From/Button";
import SelectInput from "../../core/Admin/From/SelectBox";
import { useBlogContext } from "@/app/context/BlogContext";
import CheckboxWithLabel from "../../core/Admin/From/Checkbox";
import DateInput from "../../core/Admin/From/DateInput";
import Image from "next/image";
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";
import AppImage from "../../core/Image/AppImage";

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file ||
        file instanceof File && file.size <= 2 * 1024 * 1024 &&
        ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type),
      "Unsupported or large image"
    ),
  type: z.string().min(1, "Type is required"),
  date: z.string().optional(),
  time: z.string().optional(),
  status: z.boolean().default(true),
});

export default function BlogUpdate({ id }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const router = useRouter();
  const {
    singleBlog,
    loading,
    GetSingleBlogHandle,
    UpdateBlogsHandle,
    
  } = useBlogContext();

  const URL_IMAGE = process.env.NEXT_PUBLIC_STORAGE_URL;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(articleSchema),
  });

  
  useEffect(() => {
    if (id) GetSingleBlogHandle(id);
  }, [id]);
console.log(singleBlog);

  useEffect(() => {
    if (singleBlog) {
      reset({
        title: singleBlog.title,
        description: singleBlog.description,
        type: singleBlog.type,
        date: singleBlog.date || "",
        time: singleBlog.time || "",
        status: !!singleBlog.status,
        image: undefined,
      });
      setPreview(`${URL_IMAGE}/blog/${singleBlog.image}`);
    }
  }, [singleBlog, reset]);
console.log(singleBlog);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setValue("image", file, { shouldValidate: true });
    if (file) setPreview(URL.createObjectURL(file));
  };
console.log('lol',preview);


  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image instanceof File) {
      formData.append("image", data.image);
    }
    formData.append("type", data.type);
    if (data.date) formData.append("date", data.date);
    if (data.time) formData.append("time", data.time);
    formData.append("status", data.status ? 1 : 0);
    formData.append("_method", "PATCH");

    try {
      const res = await UpdateBlogsHandle(id, formData);
      if (res?.status === true) {
        showCustomToast({
          title: "Blog Updated",
          message: "Blog updated successfully!",
          type: "success",
        });
        router.push("/admin/blog");
      }
    } catch (err) {
      console.error("Update error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Title"
        {...register("title")}
        error={errors.title?.message}
      />
      <TextArea
        label="Description"
        {...register("description")}
        error={errors.description?.message}
      />
      <FileInput
        label="Blog Image"
        name="image"
        register={register("image")}
        onChange={handleImageChange}
        error={errors.image?.message}
      />
    {preview && (
  preview.startsWith("blob:") ? (
    <img
      src={preview}
      alt="Preview"
      className="w-24 h-24 object-cover rounded border mt-2"
      width={150}
      height={150}
    />
  ) : (
    <AppImage
      src={preview}
      alt="Preview"
      width={150}
      height={150}
      className="w-24 h-24 object-cover rounded border mt-2"
    />
  )
)}
      <SelectInput
        label="Type"
        options={[
          { label: "Technology", value: "Technology" },
          { label: "Business", value: "Business" },
          { label: "Lifestyle", value: "Lifestyle" },
        ]}
        {...register("type")}
        error={errors.type?.message}
      />
      <DateInput
        label="Date"
        {...register("date")}
        error={errors.date?.message}
      />
      <Input
        label="Time"
        {...register("time")}
        error={errors.time?.message}
      />
      <CheckboxWithLabel
        label="Published?"
        {...register("status")}
        error={errors.status?.message}
      />

      <FormButton loading={isSubmitting}>Update Blog</FormButton>
    </form>
  );
}
