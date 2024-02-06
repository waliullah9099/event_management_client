import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import ScrollBar from "./components/shared/ScrollBar.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
      <Toaster />
      <ScrollBar />
    </div>
  </React.StrictMode>
);
