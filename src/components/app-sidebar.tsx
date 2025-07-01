"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Moon,
  Sun,
  SquareTerminal,
} from "lucide-react";



import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";

// This is sample data.
const data = {
  user: {
    name: "Sérgio",
    email: "sergio@example.com",
    avatar: "/avatars/sergio.jpg",
  },
  teams: [
    {
      name: "Smart Parking",
      logo: GalleryVerticalEnd,
      plan: "P&D - Empresa XY",
    },
    {
      name: "Voice Control",
      logo: AudioWaveform,
      plan: "P&D - Empresa DK",
    },
    {
      name: "Vehice Tracking",
      logo: Command,
      plan: "Pessoal",
    },
  ],
  navMain: [
    {
      title: "Projeto",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Membros",
          url: "#",
        },
        {
          title: "Quadros",
          url: "/project",
        },
        {
          title: "Resumo",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Gerais",
      url: "#",
      icon: Frame,
    },
    {
      name: "Notificações",
      url: "#",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

 
  const { theme, setTheme } = useTheme();
  const user = useUser();
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="outline"
        >
          {theme === "dark" ? <Sun/> : <Moon/>}
        </Button>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-between mx-4 mb-2" >
          <h1>{user.name}</h1>
          <UserButton />  
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
