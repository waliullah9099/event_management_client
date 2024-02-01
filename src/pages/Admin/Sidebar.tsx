import { cn } from "@/lib/utils";
import { LayoutDashboardIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray h-screen shadow-md mt-1 p-5">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "flex gap-2 bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                " bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon />
          <span className="font-semibold">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/events"
          className={({ isActive }) =>
            cn(
              "flex gap-2 bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon />
          <span className="font-semibold">Event</span>
        </NavLink>
        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            cn(
              "flex gap-2 bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboardIcon />
          <span className="font-semibold">Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
