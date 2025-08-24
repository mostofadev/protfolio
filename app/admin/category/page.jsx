
import BlogTable from '@/app/component/admin/blog/BlogTable'
import CategoryTable from '@/app/component/admin/category/CategoryTable'
import CreateButton from '@/app/component/admin/CreateButton'
import DLayout from '@/app/component/admin/layout/Layout'
import React from 'react'

function page() {
  return (
    <DLayout>
      <CreateButton href="/admin/category/create" text="Create Category" />
      <CategoryTable />
    </DLayout>
  )
}

export default page