import { useGetEvents } from "@/api/event/event.hook";
import { useGetServices } from "@/api/service/service.hook";

const Dashboard = () => {
  const {
    data: events,
    isLoading: eventLoading,
    isError: eventErr,
  } = useGetEvents();
  const { data: servicesData, isLoading, isError } = useGetServices();

  if (eventLoading) {
    return <p>Loading....</p>;
  }
  if (eventErr) {
    return <p>Something went wrong......</p>;
  }
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something went wrong......</p>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between">
      <div className="size-[350px] rounded-md flex items-center justify-center shadow-sm bg-light-gray px-6 py-3">
        <div className="font-bold text-3xl space-y-4">
          <h1>Services </h1>
          <h1>
            Total: <span className="text-primary">{servicesData.length}</span>{" "}
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
