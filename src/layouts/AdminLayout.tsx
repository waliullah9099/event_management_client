import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div>
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
