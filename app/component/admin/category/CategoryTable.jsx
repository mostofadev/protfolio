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
import TableActions from "../../core/table/TableActions";
import AdminPagination from "../../core/pagination/pagination";
import { useCategoryContext } from "@/app/context/CategoryContext";

export default function CategoryTable() {
 
  const { 
      categories,
      loading,
      error,
      pagination,
      getAllCategoriesHandle,
      deleteCategoryHandle,
      } = useCategoryContext()
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllCategoriesHandle(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this Category?")) {
      deleteCategoryHandle(id);
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
            <TableHeadCell>Actions</TableHeadCell>
          </tr>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              
              <TableCell>
                <TableActions
                  onEdit={() => router.push(`/admin/category/update/${category.id}`)}
                  onDelete={() => handleDelete(category.id)}
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
