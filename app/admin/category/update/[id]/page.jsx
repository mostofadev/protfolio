"use client"
import BlogUpdate from '@/app/component/admin/blog/BlogUpdate'
import CategoryUpdate from '@/app/component/admin/category/CategoryUpdate'
import DLayout from '@/app/component/admin/layout/Layout'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
   const params = useParams()
        const {id} = params
  return (
    <DLayout>
       <CategoryUpdate id={id} />
    </DLayout>
    
  )
}

export default page