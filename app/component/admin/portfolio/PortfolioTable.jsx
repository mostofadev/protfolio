"use client";


import { useBlogContext } from "@/app/context/BlogContext";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Table from "../../core/table/TableMain";
import TableHeader from "../../core/table/TableHeader";
import TableHeadCell from "../../core/table/TableHeadCell";
import TableBody from "../../core/table/TableBody";
import TableRow from "../../core/table/TableRow";
import TableCell from "../../core/table/TableCell";
import AppImage from "../../core/Image/AppImage";
import TableActions from "../../core/table/TableActions";
import Pagination from "../../core/Pagination";
import AdminPagination from "../../core/pagination/pagination";
import { usePortfolioContext } from "@/app/context/PortfolioContext";

export default function PortfolioTable() {
  const URL_IMAGE = process.env.NEXT_PUBLIC_STORAGE_URL;
  const {
     portfolios,
     loading,
     error,
     pagination,
     getAllPortfoliosHandle,
     DeletePortfoliosHandle,
  } = usePortfolioContext();

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllPortfoliosHandle(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      setCurrentPage(page);
    }
  };
console.log(pagination);

console.log(portfolios);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      DeletePortfoliosHandle(id);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <>
      <Table>
  <TableHeader>
    <tr>
      <TableHeadCell>ID</TableHeadCell>
      <TableHeadCell>Title</TableHeadCell>
      <TableHeadCell>Image</TableHeadCell>
      <TableHeadCell>Type</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Technologies</TableHeadCell>
      <TableHeadCell>Completed At</TableHeadCell>
      <TableHeadCell>Actions</TableHeadCell>
    </tr>
  </TableHeader>

  <TableBody>
    {portfolios.map((project) => (
      <TableRow key={project.id}>
        <TableCell>{project.id}</TableCell>
        <TableCell>{project.title}</TableCell>
        <TableCell>
          <AppImage
            src={`${URL_IMAGE}/featured_projects/${project.image}`}
            alt={project.title}
            width={50}
            height={50}
            rounded="none"
          />
        </TableCell>
        <TableCell>{project.project_type}</TableCell>
        <TableCell>
          <span className={`px-2 py-1 rounded text-white text-xs ${project.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
            {project.status}
          </span>
        </TableCell>
        <TableCell>{project.category?.name || 'N/A'}</TableCell>
        <TableCell>{project.technology?.name || 'N/A'}</TableCell>
        
        <TableCell>{project.completed_at}</TableCell>
        <TableCell>
          <TableActions
            onEdit={() => router.push(`/admin/portfolio/update/${project.id}`)}
            onDelete={() => handleDelete(project.id)}
          />
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
      <AdminPagination pagination={pagination} onPageChange={handlePageChange} />
    </>
  );
}
