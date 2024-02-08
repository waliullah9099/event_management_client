import { useQuery } from "@tanstack/react-query";
import { getEvents } from "./event.api";

type TEventType = {
  _id: string;
  title: string;
  description: string[];
  image: string;
};

export const useGetEvents = () => {
  const servicesData = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,

    select: (data) => {
      const events = data.data.map((item: TEventType) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
      }));
      return events;
    },
  });

  return servicesData;
};
