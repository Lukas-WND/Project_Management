'use client'
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {


function CustomBreadcrumb() {
  const pathname = usePathname();
  // Remove query params e divide a url
  const cleanPath = pathname.split("?")[0];
  // Remove barra inicial e final, divide por "/"
  const segments = cleanPath.replace(/^\/|\/$/g, "").split("/");

  // Se estiver em /dashboard ou /
  if (segments.length === 1 && (segments[0] === "dashboard" || segments[0] === "")) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Para rotas como /dashboard/project, /dashboard/project/alguma-coisa
  const crumbs = [];
  let url = "";
  for (let i = 0; i < segments.length; i++) {
    url += "/" + segments[i];
    const isLast = i === segments.length - 1;
    // Não renderiza link para o último item
    crumbs.push(
      <BreadcrumbItem key={url}>
        {isLast ? (
          <BreadcrumbPage>
            {segments[i].charAt(0).toUpperCase() + segments[i].slice(1)}
          </BreadcrumbPage>
        ) : (
          <BreadcrumbLink href={url}>
            {segments[i].charAt(0).toUpperCase() + segments[i].slice(1)}
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
    if (!isLast) {
      crumbs.push(
        <BreadcrumbSeparator key={url + "-sep"} className="hidden md:block" />
      );
    }
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>{crumbs}</BreadcrumbList>
    </Breadcrumb>
  );
} 

    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <CustomBreadcrumb />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            { children }
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  }