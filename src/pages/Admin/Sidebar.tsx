import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon } from "lucide-react";
import { GrServices } from "react-icons/gr";
import { SiEventstore } from "react-icons/si";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray h-screen shadow-md mt-1 p-5 sticky top-0 left-0">
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
              "flex gap-2 items-center bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <SiEventstore className="text-xl" />
          <span className="font-semibold">Event</span>
        </NavLink>
        <NavLink
          to="/admin/add-event"
          className={({ isActive }) =>
            cn(
              "flex gap-2 items-center bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <SiEventstore className="text-xl" />
          <span className="font-semibold">Add Event</span>
        </NavLink>
        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            cn(
              "flex gap-2 items-center bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <GrServices className="text-xl" />
          <span className="font-semibold">Service</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "flex gap-2 items-center bg-gray-400 p-3 rounded-sm hover:bg-dark-gray hover:text-white transition-all",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <GrServices className="text-xl" />
          <span className="font-semibold">Add Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
