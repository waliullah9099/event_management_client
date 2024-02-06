import { useEffect, useState } from "react";

const Dashboard = () => {
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between">
      <div className="size-[350px] rounded-md flex items-center justify-center shadow-sm bg-light-gray px-6 py-3">
        <div className="font-bold text-3xl space-y-4">
          <h1>Services </h1>
          <h1>
            Total: <span className="text-primary">{services.length}</span>{" "}
          </h1>
        </div>
      </div>
      <div className="size-[350px] rounded-md flex items-center justify-center shadow-sm bg-light-gray px-6 py-3">
        <div className="font-bold text-3xl space-y-4">
          <h1>Events </h1>
          <h1>
            Total: <span className="text-primary">{events.length}</span>{" "}
          </h1>
        </div>
      </div>
      <div className="size-[350px] rounded-md flex items-center justify-center shadow-sm bg-light-gray px-6 py-3">
        <div className="font-bold text-3xl space-y-4">
          <h1>Upcomming..... </h1>
          <h1>
            Total: <span className="text-primary">{5}</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
