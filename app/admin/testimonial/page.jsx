import CreateButton from '@/app/component/admin/CreateButton'
import DLayout from '@/app/component/admin/layout/Layout'
import TestimonialTable from '@/app/component/admin/testimonial/TestimonialTable'
import React from 'react'

function page() {
  return (
    <DLayout>
      <CreateButton href="/admin/testimonial/create" text="Create Testimonial" />
        <TestimonialTable />
    </DLayout>
    
  )
}

export default page