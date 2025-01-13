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
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            to="/"
            active={location.pathname === "/"}
          />
          <NavItem
            icon={Menu}
            label="Menu"
            to="/menu"
            active={location.pathname === "/menu"}
          />
          <NavItem
            icon={ShoppingBag}
            label="Orders"
            to="/orders"
            active={location.pathname === "/orders"}
          />
          <NavItem
            icon={Calendar}
            label="Reservations"
            to="/reservations"
            active={location.pathname === "/reservations"}
          />
          <NavItem
            icon={Settings}
            label="Settings"
            to="/settings"
            active={location.pathname === "/settings"}
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
}: {
  icon: any;
  label: string;
  to: string;
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
      asChild
    >
      <Link to={to}>
        <Icon className="h-5 w-5" />
        {sidebarOpen && <span className="ml-2">{label}</span>}
      </Link>
    </Button>
  );
};