import React from 'react'
import {SidebarProvider, SidebarTrigger,} from '@/components/ui/sidebar'

function Sidebar({ children }: { children: React.ReactNode }) {
    return (
  <SidebarProvider>
{/*       <AppSidebar /> */}
<div className=' h-screen'>

</div>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    )
}

export default Sidebar