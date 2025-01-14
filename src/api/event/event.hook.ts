import { useQuery } from "@tanstack/react-query";
import { getEvents } from "./event.api";

type TEventType = {
  _id: string;
  title: string;
  image: string;
};

export const useGetEvents = () => {
  const servicesData = useQuery({
    queryKey: ["recents"],
    queryFn: getEvents,

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
