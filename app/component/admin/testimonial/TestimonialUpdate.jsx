"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTestimonialContext } from "@/app/context/TestimonialContext";
import { showCustomToast } from "@/app/lib/showCustomToast";

import Input from "../../core/Admin/From/Input";
import TextArea from "../../core/Admin/From/TextArea";
import FileInput from "../../core/Admin/From/FileInput";
import CheckboxWithLabel from "../../core/Admin/From/Checkbox";
import FormButton from "../../core/Admin/From/Button";
import AppImage from "../../core/Image/AppImage";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  image: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file ||
        (file instanceof File &&
          file.size <= 2 * 1024 * 1024 &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(file.type)),
      "Invalid or too large image"
    ),
  feedback: z.string().min(1, "Feedback is required"),
  status: z.boolean().default(true),
});

export default function TestimonialUpdate({ id }) {
  const [preview, setPreview] = useState(null);
  const router = useRouter();
  const { singleTestimonial, getSingleTestimonialHandle, updateTestimonialHandle, loading } = useTestimonialContext();

  const URL_IMAGE = process.env.NEXT_PUBLIC_STORAGE_URL;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (id) getSingleTestimonialHandle(id);
  }, [id]);

  useEffect(() => {
    if (singleTestimonial) {
      reset({
        name: singleTestimonial.name,
        position: singleTestimonial.position,
        feedback: singleTestimonial.feedback,
        status: !!singleTestimonial.status,
        image: undefined,
      });
      setPreview(`${URL_IMAGE}/testimonials/${singleTestimonial.image}`);
    }
  }, [singleTestimonial, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setValue("image", file, { shouldValidate: true });
    if (file) setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("position", data.position);
    formData.append("feedback", data.feedback);
    if (data.image instanceof File) formData.append("image", data.image);
    formData.append("status", data.status ? 1 : 0);
    formData.append("_method", "PATCH");

    try {
      const res = await updateTestimonialHandle(id, formData);
      if (res?.status === true) {
        showCustomToast({
          title: "Updated",
          message: "Testimonial updated successfully!",
          type: "success",
        });
        router.push("/admin/testimonial");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Name" {...register("name")} error={errors.name?.message} />
      <Input label="Position" {...register("position")} error={errors.position?.message} />
      <TextArea label="Feedback" {...register("feedback")} error={errors.feedback?.message} />
      
      <FileInput
        label="Image"
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
          />
        ) : (
          <AppImage
            src={preview}
            alt="Preview"
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded border mt-2"
          />
        )
      )}

      <CheckboxWithLabel
        label="Published?"
        {...register("status")}
        error={errors.status?.message}
      />
      <FormButton loading={loading}>Update Testimonial</FormButton>
    </form>
  );
}
