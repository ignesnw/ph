import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, Car, Settings, Briefcase, BookText, Gavel } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlanHub v0",
  description: "Planhub remake",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex">
        <SidebarProvider>
          {/* Hamburger icon for mobile */}
          <SidebarTrigger className="md:hidden fixed top-4 left-4 z-50" />

          {/* Sidebar component */}
          <Sidebar collapsible="icon">
            <SidebarHeader>
              <div className="pr-2 py-2 font-bold text-lg flex items-center gap-0">
                <span className="sidebar-logo-placeholder">P</span>
                <span className="sidebar-header-full">PlanHub</span>
                <SidebarTrigger className="sidebar-trigger-collapsible hidden md:inline-flex ml-auto" />
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/dashboard" className="flex items-center gap-3">
                        <LayoutDashboard className="w-4 h-4" />
                        <span className="sidebar-menu-label">Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/users" className="flex items-center gap-3">
                        <Gavel className="w-4 h-4" />
                        <span className="sidebar-menu-label">Bidding</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/settings" className="flex items-center gap-3">
                        <Settings className="w-4 h-4" />
                        <span className="sidebar-menu-label">Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/projects/engineering" className="flex items-center gap-3">
                        <Briefcase className="w-4 h-4" />
                        <span className="sidebar-menu-label">Take off & Estimate</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/projects/docs" className="flex items-center gap-3">
                        <BookText className="w-4 h-4" />
                        <span className="sidebar-menu-label">Quote</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
              <div className="p-4 text-xs text-muted-foreground">
                Signed in as m@example.com
              </div>
            </SidebarFooter>
          </Sidebar>

          {/* Main content area */}
          <main className="flex-1 p-6">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
