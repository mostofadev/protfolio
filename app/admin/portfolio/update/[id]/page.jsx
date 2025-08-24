"use client"
import DLayout from '@/app/component/admin/layout/Layout'
import PortfolioUpdate from '@/app/component/admin/portfolio/PortfolioUpdate'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

function page() {
    
     const params = useParams();
       const { id } = params;
     
  return (
    <DLayout>
        <PortfolioUpdate id={id} />
    </DLayout>
  )
}

export default page