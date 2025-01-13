import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function SidebarLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}