// app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-muted/20">
        {/* We could add a dashboard-specific header here */}
        {children}
      </main>
    </div>
  );
}