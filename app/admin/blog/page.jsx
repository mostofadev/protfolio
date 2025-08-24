import BlogTable from "@/app/component/admin/blog/BlogTable";
import CreateButton from "@/app/component/admin/CreateButton";
import DLayout from "@/app/component/admin/layout/Layout";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <DLayout>
      <CreateButton href="/admin/blog/create" text="Create Blog" />
      <BlogTable />
    </DLayout>
  );
}

export default page;
