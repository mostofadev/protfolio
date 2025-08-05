"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../core/Admin/From/Input";
import FormButton from "../../core/Admin/From/Button";
import { useBlogContext } from "@/app/context/BlogContext";
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";
import { useCategoryContext } from "@/app/context/CategoryContext";

const articleSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export default function CreateCategory() {
 const {loading,createCategoryHandle} = useCategoryContext();
 const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      status: true,
    },
  });
 
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    try {
      const res = await createCategoryHandle(formData);
      if(res?.status === true){
        showCustomToast({
        title: "Category Create",
        message: 'Category Create successfully!',
        type: "success",
      });
      router.push('/admin/category');
      }
      
      console.log(res);
    } catch (err) {
      console.error("Submit error:", err);
    } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <FormButton loading={loading}>
        Create Category
      </FormButton>
    </form>
  );
}
