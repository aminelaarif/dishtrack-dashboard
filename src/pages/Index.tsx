import { SidebarProvider } from "@/components/ui/sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { OrderTracker } from "@/components/dashboard/OrderTracker";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { MenuItems } from "@/components/dashboard/MenuItems";
import {
  LayoutDashboard,
  Menu,
  ShoppingBag,
  Calendar,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-sidebar text-white transition-all duration-300",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && <h1 className="text-xl font-bold">Drora</h1>}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-sidebar-hover"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <ChevronLeft
                className={cn(
                  "h-6 w-6 transition-transform",
                  !sidebarOpen && "rotate-180"
                )}
              />
            </Button>
          </div>
          <nav className="space-y-2">
            <NavItem icon={LayoutDashboard} label="Dashboard" active />
            <NavItem icon={Menu} label="Menu" />
            <NavItem icon={ShoppingBag} label="Orders" />
            <NavItem icon={Calendar} label="Reservations" />
            <NavItem icon={Settings} label="Settings" />
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500">Here's what's happening today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Orders" value="2,250" />
            <StatCard title="Pending Orders" value="12" />
            <StatCard title="Revenue" value="$2,250" />
            <StatCard title="Reservations" value="8" />
          </div>

          <OrderTracker />

          <div className="mt-8">
            <RevenueChart />
          </div>

          <div className="mt-8">
            <MenuItems />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  icon: Icon,
  label,
  active,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) => {
  const [sidebarOpen] = useState(true);

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start text-white hover:bg-sidebar-hover",
        active && "bg-sidebar-hover"
      )}
    >
      <Icon className="h-5 w-5" />
      {sidebarOpen && <span className="ml-2">{label}</span>}
    </Button>
  );
};

export default Index;