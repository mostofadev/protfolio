
import BlogTable from '@/app/component/admin/blog/BlogTable'
import CategoryTable from '@/app/component/admin/category/CategoryTable'
import DLayout from '@/app/component/admin/layout/Layout'
import React from 'react'

function page() {
  return (
    <DLayout>
      <CategoryTable />
    </DLayout>
  )
}

export default page