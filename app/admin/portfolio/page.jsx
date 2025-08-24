import CreateButton from "@/app/component/admin/CreateButton";
import DLayout from "@/app/component/admin/layout/Layout";
import PortfolioTable from "@/app/component/admin/portfolio/PortfolioTable";
import React from "react";

function page() {
  return (
    <DLayout>
      <CreateButton href="/admin/portfolio/create" text="Create Portfolio" />
      <PortfolioTable />
    </DLayout>
  );
}

export default page;
