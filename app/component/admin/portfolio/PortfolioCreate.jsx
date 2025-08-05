"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import Input from "../../core/Admin/From/Input";
import TextArea from "../../core/Admin/From/TextArea";
import FileInput from "../../core/Admin/From/FileInput";
import FormButton from "../../core/Admin/From/Button";
import SelectInput from "../../core/Admin/From/SelectBox";
import CheckboxWithLabel from "../../core/Admin/From/Checkbox";
import DateInput from "../../core/Admin/From/DateInput";
import { showCustomToast } from "@/app/lib/showCustomToast";
import { useRouter } from "next/navigation";
import { usePortfolioContext } from "@/app/context/PortfolioContext";
import { useTechnologyContext } from "@/app/context/TechnologyContext";
import { useCategoryContext } from "@/app/context/CategoryContext";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.instanceof(File, "Image is required"),
  demo_link: z.string().url().optional(),
  github_link: z.string().url().optional(),
  features: z.string().optional(),
  tags: z.string().optional(),
  project_type: z.string(),
  is_team_project: z.boolean(),
  team_role: z.string().optional(),
  completed_at: z.string().optional(),
  status: z.boolean().default(true),
  category_id: z.string().min(1, "Category is required"),
  technology_id: z.string().min(1, "Technology is required"),
});

export default function PortfolioCreate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [screenshots, setScreenshots] = useState([{ image: null, caption: "", order: 1 }]);
  const [preview, setPreview] = useState(null);
  const { CreatePortfoliosHandle } = usePortfolioContext();
  const { categories, getAllCategoriesHandle } = useCategoryContext();
  const { technologies, getAllTechnologiesHandle } = useTechnologyContext();
  const router = useRouter();

  useEffect(() => {
    getAllCategoriesHandle();
    getAllTechnologiesHandle();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      is_team_project: false,
      status: true,
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setValue("image", file, { shouldValidate: true });
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleScreenshotChange = (index, field, value) => {
    const updated = [...screenshots];
    updated[index][field] = value;
    setScreenshots(updated);
  };

  const addScreenshotField = () => {
    setScreenshots([...screenshots, { image: null, caption: "", order: screenshots.length + 1 }]);
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

  const categoryOptions = categories.map((cat) => ({
    label: cat.name,
    value: cat.id.toString(),
  }));

  const technologyOptions = technologies.map((tech) => ({
    label: tech.name,
    value: tech.id.toString(),
  }));

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", data.image);
      formData.append("demo_link", data.demo_link || "");
      formData.append("github_link", data.github_link || "");
      formData.append("features", data.features || "");
      formData.append("tags", data.tags || "");
      formData.append("project_type", data.project_type);
      formData.append("is_team_project", data.is_team_project ? "1" : "0");
      formData.append("team_role", data.team_role || "");
      formData.append("completed_at", data.completed_at || "");
      formData.append("status", data.status ? "1" : "0");
      formData.append("category_id", data.category_id);
      formData.append("technology_id", data.technology_id);

      screenshots.forEach((shot, index) => {
        if (shot.image) {
          formData.append(`screenshots[${index}][image]`, shot.image);
          formData.append(`screenshots[${index}][caption]`, shot.caption);
          formData.append(`screenshots[${index}][order]`, shot.order.toString());
        }
      });

      const res = await CreatePortfoliosHandle(formData);

      if (res?.status === true) {
        showCustomToast({
          title: "Portfolio Created",
          message: "Portfolio created successfully!",
          type: "success",
        });
        router.push("/admin/portfolio");
      }
    } catch (error) {
      console.error("Submit error:", error);
      showCustomToast({
        title: "Error",
        message: "Failed to create portfolio.",
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

      <FileInput
        label="Main Image"
        name="image"
        register={register("image")}
        onChange={handleImageChange}
        error={errors.image?.message}
      />
      {preview && <img src={preview} alt="Preview" className="w-24 h-24 object-cover mt-2" />}

      <Input label="Demo Link" {...register("demo_link")} error={errors.demo_link?.message} />

      <Input label="GitHub Link" {...register("github_link")} error={errors.github_link?.message} />

      <TextArea label="Features" {...register("features")} />

      <Input label="Tags (comma separated)" {...register("tags")} />

      <SelectInput
        label="Project Type"
        options={projectTypeOptions}
        {...register("project_type")}
        error={errors.project_type?.message}
      />

      <Input label="Your Role (if team project)" {...register("team_role")} />

      <DateInput label="Completed At" {...register("completed_at")} error={errors.completed_at?.message} />

      <SelectInput
        label="Category"
        options={categoryOptions}
        {...register("category_id")}
        error={errors.category_id?.message}
      />

      <SelectInput
        label="Technology"
        options={technologyOptions}
        {...register("technology_id")}
        error={errors.technology_id?.message}
      />

      {/* Screenshots Section */}
      <div className="space-y-4">
        <label className="font-semibold text-sm">Screenshots</label>
        {screenshots.map((s, index) => (
          <div key={index} className="border p-4 rounded space-y-2 relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleScreenshotChange(index, "image", e.target.files[0])}
            />
            <Input
              label="Caption"
              value={s.caption}
              onChange={(e) => handleScreenshotChange(index, "caption", e.target.value)}
            />
            <Input
              label="Order"
              type="number"
              value={s.order}
              onChange={(e) => handleScreenshotChange(index, "order", Number(e.target.value))}
            />
            {screenshots.length > 1 && (
              <button type="button" className="text-red-500 text-sm" onClick={() => removeScreenshotField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addScreenshotField} className="text-blue-600 text-sm">
          + Add Screenshot
        </button>
      </div>

      {/* Team Project Checkbox */}
      <Controller
        name="is_team_project"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <CheckboxWithLabel
            label="Team Project?"
            checked={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            ref={field.ref}
          />
        )}
      />

      {/* Published Checkbox */}
      <CheckboxWithLabel label="Published?" {...register("status")} />

      <FormButton type="submit" loading={isSubmitting}>
        Create Portfolio
      </FormButton>
    </form>
  );
}
