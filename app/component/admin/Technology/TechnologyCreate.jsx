"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../core/Admin/From/Input";
import FormButton from "../../core/Admin/From/Button";
import { useTechnologyContext } from "@/app/context/TechnologyContext";
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

export default function TechnologyCreate() {
  const { loading, createTechnologyHandle } = useTechnologyContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);

    try {
      const res = await createTechnologyHandle(formData);
      if (res?.status === true) {
        showCustomToast({
          title: "Technology Created",
          message: "Technology created successfully!",
          type: "success",
        });
        router.push("/admin/technology");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Name" {...register("name")} error={errors.name?.message} />
      <FormButton loading={loading}>Create Technology</FormButton>
    </form>
  );
}
