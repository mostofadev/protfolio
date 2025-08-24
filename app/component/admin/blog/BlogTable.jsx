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

export default function BlogTable() {
  const URL_IMAGE = process.env.NEXT_PUBLIC_STORAGE_URL;
  const {
    blogs,
    getAllBlogsHandle,
    DeleteBlogsHandle,
    loading,
    pagination,
    error,
  } = useBlogContext();

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllBlogsHandle(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      DeleteBlogsHandle(id);
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
            <TableHeadCell>image</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </tr>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.id}</TableCell>
              <TableCell>{blog.title}</TableCell>
              <TableCell>
                <AppImage
                  src={`${URL_IMAGE}/blog/${blog.image}`}
                  alt={blog.title}
                  width={48}
                  height={48}
                  
                />
              </TableCell>
              <TableCell>
                <TableActions
                  onEdit={() => router.push(`/admin/blog/update/${blog.id}`)}
                  onDelete={() => handleDelete(blog.id)}
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
