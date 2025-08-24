"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Input from "../../core/Admin/From/Input";
import TextArea from "../../core/Admin/From/TextArea";
import FileInput from "../../core/Admin/From/FileInput";
import SelectInput from "../../core/Admin/From/SelectBox";
import DateInput from "../../core/Admin/From/DateInput";
import CheckboxWithLabel from "../../core/Admin/From/Checkbox";
import FormButton from "../../core/Admin/From/Button";

import { usePortfolioContext } from "@/app/context/PortfolioContext";
import { useCategoryContext } from "@/app/context/CategoryContext";
import { useTechnologyContext } from "@/app/context/TechnologyContext";
import { showCustomToast } from "@/app/lib/showCustomToast";

// Zod schema
const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.any().optional(),
  demo_link: z.string().url().optional(),
  github_link: z.string().url().optional(),
  features: z.string().optional(),
  tags: z.string().optional(),
  project_type: z.string(),
  is_team_project: z.boolean(),
  team_role: z.string().optional(),
  completed_at: z.string().optional(),
  status: z.boolean(),
  category_id: z.number({ invalid_type_error: "Category is required" }),
  technology_id: z.number({ invalid_type_error: "Technology is required" }),
});

export default function PortfolioUpdate({ id }) {
  const { GetSinglePortfolioHandle, UpdatePortfoliosHandle } =
    usePortfolioContext();
  const { categories, getAllCategoriesHandle } = useCategoryContext();
  const { technologies, getAllTechnologiesHandle } = useTechnologyContext();

  const URL_IMAGE = process.env.NEXT_PUBLIC_STORAGE_URL;
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const [screenshots, setScreenshots] = useState([
    { image: null, caption: "", order: 1, preview: null },
  ]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // Load categories, technologies, and portfolio data
  useEffect(() => {
    getAllCategoriesHandle();
    getAllTechnologiesHandle();

    const fetchPortfolio = async () => {
      const data = await GetSinglePortfolioHandle(id);
      if (data) {
        Object.keys(data).forEach((key) => {
          if (key === "category_id" || key === "technology_id") {
            setValue(key, Number(data[key]));
          } else if (key === "is_team_project" || key === "status") {
            setValue(key, Boolean(data[key]));
          } else {
            setValue(key, data[key]);
          }
        });

        if (data.image)
          setPreview(`${URL_IMAGE}/featured_projects/${data.image}`);

        if (data.screenshots && data.screenshots.length > 0) {
          setScreenshots(
            data.screenshots.map((s) => ({
              image: null,
              preview: s.image,
              caption: s.caption || "",
              order: s.order || 1,
            }))
          );
        }
      }
    };
    fetchPortfolio();
  }, [id]);

  // Handle main image change
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle screenshot changes
  const handleScreenshotChange = (index, field, value) => {
    const updated = [...screenshots];
    updated[index][field] = value;
    setScreenshots(updated);
  };

  const addScreenshotField = () => {
    setScreenshots([
      ...screenshots,
      { image: null, caption: "", order: screenshots.length + 1, preview: null },
    ]);
  };

  const removeScreenshotField = (index) => {
    const updated = [...screenshots];
    updated.splice(index, 1);
    setScreenshots(updated);
  };

  const projectTypeOptions = [
    { label: "Personal", value: "personal" },
    { label: "Client", value: "client" },
    { label: "Open Source", value: "open_source" },
  ];

  const categoryOptions = categories.map((cat) => ({ label: cat.name, value: cat.id }));
  const technologyOptions = technologies.map((tech) => ({ label: tech.name, value: tech.id }));

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Text & select fields
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("demo_link", data.demo_link || "");
      formData.append("github_link", data.github_link || "");
      formData.append("features", data.features || "");
      formData.append("tags", data.tags || "");
      formData.append("project_type", data.project_type);
      formData.append("team_role", data.team_role || "");
      formData.append("completed_at", data.completed_at || "");
      formData.append("category_id", data.category_id.toString());
      formData.append("technology_id", data.technology_id.toString());

      // Boolean fields (Laravel expects 1/0)
      formData.append("is_team_project", data.is_team_project ? "1" : "0");
      formData.append("status", data.status ? "1" : "0");

      // Main image
      if (data.image instanceof File) {
        formData.append("image", data.image);
      }

      // Screenshots
      screenshots.forEach((shot, index) => {
        if (shot.image instanceof File) {
          formData.append(`screenshots[${index}][image]`, shot.image);
        }
        formData.append(`screenshots[${index}][caption]`, shot.caption || "");
        formData.append(`screenshots[${index}][order]`, shot.order.toString());
      });

      // Method override for PUT
      formData.append("_method", "PUT");

      const res = await UpdatePortfoliosHandle(id, formData);

      if (res?.status) {
        showCustomToast({
          title: "Portfolio Updated",
          message: "Portfolio updated successfully!",
          type: "success",
        });
        router.push("/admin/portfolio");
      }
    } catch (error) {
      console.error(error);
      showCustomToast({
        title: "Error",
        message: "Failed to update portfolio",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="Title" {...register("title")} error={errors.title?.message} />
      <TextArea label="Description" {...register("description")} error={errors.description?.message} />
      <FileInput label="Main Image" name="image" register={register("image")} onChange={handleImageChange} error={errors.image?.message} />
      {preview && <img src={preview} alt="Preview" className="w-24 h-24 object-cover mt-2" />}
      <Input label="Demo Link" {...register("demo_link")} error={errors.demo_link?.message} />
      <Input label="GitHub Link" {...register("github_link")} error={errors.github_link?.message} />
      <TextArea label="Features" {...register("features")} />
      <Input label="Tags (comma separated)" {...register("tags")} />
      <SelectInput label="Project Type" options={projectTypeOptions} value={watch("project_type")} onChange={(val) => setValue("project_type", val)} error={errors.project_type?.message} />
      <Input label="Team Role" {...register("team_role")} />
      <DateInput label="Completed At" {...register("completed_at")} error={errors.completed_at?.message} />
      <SelectInput label="Category" options={categoryOptions} value={watch("category_id")} onChange={(val) => setValue("category_id", Number(val))} error={errors.category_id?.message} />
      <SelectInput label="Technology" options={technologyOptions} value={watch("technology_id")} onChange={(val) => setValue("technology_id", Number(val))} error={errors.technology_id?.message} />

      {/* Screenshots */}
      <div className="space-y-4">
        <label className="font-semibold text-sm">Screenshots</label>
        {screenshots.map((s, index) => (
          <div key={index} className="border p-4 rounded space-y-2 relative">
            <input type="file" accept="image/*" onChange={(e) => handleScreenshotChange(index, "image", e.target.files[0])} />
            <Input label="Caption" value={s.caption} onChange={(e) => handleScreenshotChange(index, "caption", e.target.value)} />
            <Input label="Order" type="number" value={s.order} onChange={(e) => handleScreenshotChange(index, "order", Number(e.target.value))} />
            {screenshots.length > 1 && (
              <button type="button" className="text-red-500 text-sm" onClick={() => removeScreenshotField(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" className="text-blue-600 text-sm" onClick={addScreenshotField}>+ Add Screenshot</button>
      </div>

      <CheckboxWithLabel label="Team Project?" {...register("is_team_project")} />
      <CheckboxWithLabel label="Published?" {...register("status")} />

      <FormButton type="submit" loading={isSubmitting} IsValid={isValid}>Update Portfolio</FormButton>
    </form>
  );
}
