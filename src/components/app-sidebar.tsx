"use client";

import * as React from "react";
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
