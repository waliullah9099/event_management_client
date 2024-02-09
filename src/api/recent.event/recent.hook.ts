import { useQuery } from "@tanstack/react-query";
import { getRecentEvents } from "../recent.api";
type TEventType = {
  _id: string;
  title: string;
  image: string;
};

export const useGetRecentEvents = () => {
  const servicesData = useQuery({
    queryKey: ["events"],
    queryFn: getRecentEvents,

    select: (data) => {
      const events = data.data.map((item: TEventType) => ({
        id: item._id,
        title: item.title,
        image: item.image,
      }));
      return events;
    },
  });

  return servicesData;
};
