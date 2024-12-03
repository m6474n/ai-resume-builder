import { AppSidebar } from '@/components/Sidebar/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'


export default function layout({children}) {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  )
}
