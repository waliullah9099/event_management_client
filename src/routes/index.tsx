import NotFound from "@/components/shared/404";
import AdminLayout from "@/layouts/AdminLayout";
import MainLayout from "@/layouts/MainLayout";
import AddEvent from "@/pages/Admin/event/AddEvent";
import AddSerices from "@/pages/Admin/service/AddSerices";
import Dashboard from "@/pages/Admin/Dashboard";
import Events from "@/pages/Admin/event/Events";
import Services from "@/pages/Admin/service/Services";
import UpdatedSerices from "@/pages/Admin/UpdatedService";
import Home from "@/pages/Home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";
import UpdateEvent from "@/pages/Admin/event/UpdateEvent";
import AddRecentEvent from "@/pages/Admin/recentEvent/AddRecentEvent";
import RecetnEvents from "@/pages/Admin/recentEvent/RecentEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "add-event",
        element: <AddEvent />,
      },
      {
        path: "recent-events",
        element: <RecetnEvents />,
      },
      {
        path: "add-recent-event",
        element: <AddRecentEvent />,
      },
      {
        path: "update-event",
        element: <UpdateEvent />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "add-service",
        element: <AddSerices />,
      },
      {
        path: "update-service",
        element: <UpdatedSerices />,
      },
    ],
  },
]);

export default router;
