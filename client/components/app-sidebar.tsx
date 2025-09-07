"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    useSidebar,
} from "@/components/ui/sidebar"
import { useAuth } from "@/context/auth-provider"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Calendar, Users, FolderOpen, Settings, Briefcase, User, UsersRound, HomeIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: HomeIcon,
    },
    {
        title: "Candidature",
        url: "/job-applications",
        icon: Briefcase,
    },
    {
        title: "Colloqui",
        url: "/interview-steps",
        icon: Calendar,
    },
    {
        title: "HR",
        url: "/hr",
        icon: UsersRound,
    },
    {
        title: "Documenti",
        url: "/documents",
        icon: FileText,
    },
    {
        title: "Impostazioni",
        url: "/impostazioni",
        icon: Settings,
    },
]

interface AppSidebarProps {
    onNavigate: (view: string) => void
    currentView: string
}


export function AppSidebar() {

    const { open, setOpen } = useSidebar()
    const { session, isLoading } = useAuth()

    const [openedonhover, setopenedonhover] = useState(false);

    const openOnHover = () => {
        if (!open && !openedonhover) {
            setopenedonhover(true);
            setOpen(true)
        }
    }

    const closeOnHover = () => {
        if (open && openedonhover) {
            setOpen(false)
            setopenedonhover(false);
        }
    }

    return (
        <Sidebar variant="sidebar" collapsible="icon" className="border-r border-slate-200 dark:border-slate-800" onMouseEnter={openOnHover} onMouseLeave={closeOnHover}>
            <SidebarHeader className={cn("border-b border-slate-200 dark:border-slate-800 h-16 items-center flex justify-center")}>
                <div className={cn(open ? "flex items-center gap-3" : "flex w-full items-center")}>
                    <div className={cn(" rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center", open ? "w-10 h-10" : "w-8 h-8")}>
                        <Briefcase className={cn("text-white", open ? "h-6 w-6" : "h-4 w-4")} />
                    </div>
                    {
                        open && (<div>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">JobTracker</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Gestione Candidature</p>
                        </div>)
                    }
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-slate-500 dark:text-slate-400 font-medium">Navigazione</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <Link href={item.url}>
                                        <SidebarMenuButton
                                            /*     onClick={() => {}}
                                            isActive={false} */
                                            className="w-full justify-start hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400 data-[active=true]:bg-emerald-100 data-[active=true]:text-emerald-700 dark:data-[active=true]:bg-emerald-900/30 dark:data-[active=true]:text-emerald-400"
                                        >
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className={cn("border-t border-slate-200 dark:border-slate-800 p-4", !open && "hidden")}>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{session?.user?.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{session?.user?.email}</p>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
