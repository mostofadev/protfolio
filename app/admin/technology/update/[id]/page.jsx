"use client"
import DLayout from '@/app/component/admin/layout/Layout'
import TechnologyUpdate from '@/app/component/admin/Technology/TechnologyUpdate'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const params = useParams()
          const {id} = params
  return (
    <DLayout>
        <TechnologyUpdate id={id} />
    </DLayout>
  )
}

export default page