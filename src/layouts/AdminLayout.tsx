import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Admin/Sidebar";
import Header from "@/components/shared/Header";

const AdminLayout = () => {
  return (
    <div>
      <div className="border-b-2 shadow-md">
        <Header />
      </div>
      <div className="flex">
        <div className="flex-[1] top-12">
          <Sidebar />
        </div>
        <div className="flex-[5] p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
