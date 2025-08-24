import CreateButton from '@/app/component/admin/CreateButton'
import DLayout from '@/app/component/admin/layout/Layout'
import TechnologyTable from '@/app/component/admin/Technology/TechnologyTable'
import React from 'react'

function page() {
  return (
    <DLayout>
      <CreateButton href="/admin/technology/create" text="Create Technology" />
        <TechnologyTable />
    </DLayout>
  )
}

export default page