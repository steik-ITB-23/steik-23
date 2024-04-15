import AdminSidebar from "@/components/Admin/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen">
      <div className="h-[100svh] w-64 drop-shadow-md bg-slate-50 shrink-0 grow-0">
        <AdminSidebar />
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}
