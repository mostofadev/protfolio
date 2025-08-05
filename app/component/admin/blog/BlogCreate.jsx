"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z
    .instanceof(File, { message: "Image is required" })
    .refine((file) => file.size <= 2 * 1024 * 1024, "Image must be under 2MB")
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type),
      "Unsupported file type"
    ),
  type: z.string().min(1, "Type is required"),
  date: z.string().optional(),
  time: z.string().optional(),
  status: z.boolean().default(true),
});

export default function CreateBlogPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { CreateBlogsHandle } = useBlogContext();
 const [preview, setPreview] = useState(null);
 const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      status: true,
    },
  });
 const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setValue("image", file, { shouldValidate: true });
    if (file) setPreview(URL.createObjectURL(file));
  };
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image);
    formData.append("type", data.type);
    if (data.date) formData.append("date", data.date);
    if (data.time) formData.append("time", data.time);
    formData.append("status", data.status ? 1 : 0);

    try {
      const res = await CreateBlogsHandle(formData);
      if(res?.status === true){
        showCustomToast({
        title: "Blog Create",
        message: 'Blog Create successfully!',
        type: "success",
      });
      router.push('/admin/blog');
      }
      
      console.log(res);
    } catch (err) {
      console.error("Submit error:", err);
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
        label="Brand Image"
        name="image"
        register={register("image")}
        onChange={handleImageChange}
        error={errors.image?.message}
      />
      {preview && (
        <Image
          src={preview}
          alt="Preview"
          width={100}
          height={100}
          className="w-24 h-24 object-cover rounded border mt-2"
        />
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

      <FormButton loading={isSubmitting}>
        Create Blog
      </FormButton>
    </form>
  );
}
