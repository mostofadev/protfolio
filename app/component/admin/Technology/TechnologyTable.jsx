"use client";

import { useTechnologyContext } from "@/app/context/TechnologyContext";
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

export default function TechnologyTable() {
  const {
    technologies,
    loading,
    error,
    pagination,
    getAllTechnologiesHandle,
    deleteTechnologyHandle,
  } = useTechnologyContext();

  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    getAllTechnologiesHandle(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this Technology?")) {
      deleteTechnologyHandle(id);
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
            <TableHeadCell>Actions</TableHeadCell>
          </tr>
        </TableHeader>
        <TableBody>
          {technologies.map((tech) => (
            <TableRow key={tech.id}>
              <TableCell>{tech.id}</TableCell>
              <TableCell>{tech.name}</TableCell>
              <TableCell>
                <TableActions
                  onEdit={() =>
                    router.push(`/admin/technology/update/${tech.id}`)
                  }
                  onDelete={() => handleDelete(tech.id)}
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
