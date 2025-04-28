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
          url: "#",
        },
        {
          title: "Atividades",
          url: "#",
        },
      ],
    },
    {
      title: "Planejamento",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introdução",
          url: "#",
        },
        {
          title: "Histórias",
          url: "#",
        },
        {
          title: "Diagramas",
          url: "#",
        },
        {
          title: "Versões",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Gerais",
          url: "#",
        },
        {
          title: "Equipe",
          url: "#",
        },
        {
          title: "Notificações",
          url: "#",
        },
        {
          title: "Automações",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
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
