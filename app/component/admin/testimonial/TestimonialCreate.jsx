"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Input from "../../core/Admin/From/Input";
import TextArea from "../../core/Admin/From/TextArea";
import FileInput from "../../core/Admin/From/FileInput";
import FormButton from "../../core/Admin/From/Button";
import CheckboxWithLabel from "../../core/Admin/From/Checkbox"; // 👈 context টা testimonial অনুযায়ী হালনাগাদ করুন
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTestimonialContext } from "@/app/context/TestimonialContext";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  image: z
    .instanceof(File, { message: "Image is required" })
    .refine((file) => file.size <= 2 * 1024 * 1024, "Image must be under 2MB")
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
          file.type
        ),
      "Unsupported file type"
    ),
  feedback: z.string().min(1, "Feedback is required"),
  status: z.boolean().default(true),
});

export default function TestimonialCreate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const { loading,createTestimonialHandle } = useTestimonialContext(); 
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
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
    formData.append("name", data.name);
    formData.append("position", data.position);
    formData.append("feedback", data.feedback);
    formData.append("image", data.image);
    formData.append("status", data.status ? 1 : 0);

    try {
      const res = await createTestimonialHandle(formData);
      if (res?.status === true) {
        showCustomToast({
          title: "Testimonial Created",
          message: "Testimonial added successfully!",
          type: "success",
        });
        router.push("/admin/testimonial");
      }
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Position"
        {...register("position")}
        error={errors.position?.message}
      />
      <TextArea
        label="Feedback"
        {...register("feedback")}
        error={errors.feedback?.message}
      />
      <FileInput
        label="Image"
        name="image"
        register={register("image")}
        onChange={handleImageChange}
        error={errors.image?.message}
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          width={100}
          height={100}
          className="w-24 h-24 object-cover rounded border mt-2"
        />
      )}
      <CheckboxWithLabel
        label="Published?"
        {...register("status")}
        error={errors.status?.message}
      />
      <FormButton loading={loading}>Create Testimonial</FormButton>
    </form>
  );
}
