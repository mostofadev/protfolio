"use client"
import BlogUpdate from '@/app/component/admin/blog/BlogUpdate'
import DLayout from '@/app/component/admin/layout/Layout'
import React from 'react'
import { useParams } from "next/navigation";

function page() {
  const params = useParams()
      const {id} = params
  return (
    <DLayout>
      <BlogUpdate id={id}/>
    </DLayout>
    
  )
}

export default page