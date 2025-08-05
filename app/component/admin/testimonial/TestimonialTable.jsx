"use client";

import { useTestimonialContext } from "@/app/context/TestimonialContext";
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
import AdminPagination from "../../core/pagination/pagination";

export default function TestimonialTable() {
  const URL_IMAGE = process.env.NEXT_PUBLIC_STORAGE_URL;
  const {
    testimonials,
    getAllTestimonialsHandle,
    deleteTestimonialHandle,
    loading,
    pagination,
    error,
  } = useTestimonialContext();

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllTestimonialsHandle(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteTestimonialHandle(id);
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
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </tr>
        </TableHeader>
        <TableBody>
          {testimonials.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <AppImage
                  src={`${URL_IMAGE}/testimonials/${item.image}`}
                  alt={item.name}
                  width={48}
                  height={48}
                  rounded="none"
                />
              </TableCell>
              <TableCell>
                <TableActions
                  onEdit={() =>
                    router.push(`/admin/testimonial/update/${item.id}`)
                  }
                  onDelete={() => handleDelete(item.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AdminPagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </>
  );
}
