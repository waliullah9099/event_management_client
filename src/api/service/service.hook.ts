import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

type TServiceType = {
  _id: string;
  title: string;
  description: string[];
  image: string;
};

export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,

    select: (data) => {
      const services = data.data.map((item: TServiceType) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
      }));
      return services;
    },
  });

  return servicesData;
};
