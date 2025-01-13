import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Menu,
  ShoppingBag,
  Calendar,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-full bg-sidebar text-white transition-all duration-300 z-50",
        sidebarOpen ? "w-64" : "w-20"
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          {sidebarOpen && <h1 className="text-xl font-bold animate-fade-in">Drora</h1>}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-sidebar-hover transition-colors duration-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <ChevronLeft
              className={cn(
                "h-6 w-6 transition-transform duration-300",
                !sidebarOpen && "rotate-180"
              )}
            />
          </Button>
        </div>
        <nav className="space-y-2">
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            to="/"
            active={location.pathname === "/"}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={Menu}
            label="Menu"
            to="/menu"
            active={location.pathname === "/menu"}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={ShoppingBag}
            label="Orders"
            to="/orders"
            active={location.pathname === "/orders"}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={Calendar}
            label="Reservations"
            to="/reservations"
            active={location.pathname === "/reservations"}
            sidebarOpen={sidebarOpen}
          />
          <NavItem
            icon={Settings}
            label="Settings"
            to="/settings"
            active={location.pathname === "/settings"}
            sidebarOpen={sidebarOpen}
          />
        </nav>
      </div>
    </div>
  );
}

const NavItem = ({
  icon: Icon,
  label,
  to,
  active,
  sidebarOpen,
}: {
  icon: any;
  label: string;
  to: string;
  active?: boolean;
  sidebarOpen: boolean;
}) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start text-white hover:bg-sidebar-hover transition-all duration-200",
        active && "bg-sidebar-hover",
        "animate-fade-in"
      )}
      asChild
    >
      <Link to={to}>
        <Icon className="h-5 w-5" />
        {sidebarOpen && <span className="ml-2">{label}</span>}
      </Link>
    </Button>
  );
};