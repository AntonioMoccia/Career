import { AppSidebar } from '@/components/app-sidebar'
import { Navbar } from '@/components/Navbar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (

        <SidebarProvider>
            <AppSidebar />
            <main className='w-full  overflow-x-hidden'>
                <div className='h-16  w-full'>
                    <Navbar />
                </div>
                <div className='p-6'>
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}

export default Layout