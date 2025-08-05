import BlogCreate from '@/app/component/admin/blog/BlogCreate'
import DLayout from '@/app/component/admin/layout/Layout'
import React from 'react'

function page() {
  return (
    <DLayout>
        <BlogCreate />
    </DLayout>
  )
}

export default page