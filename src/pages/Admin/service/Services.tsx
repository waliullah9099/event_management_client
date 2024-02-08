import toast from "react-hot-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetServices } from "@/api/service/service.hook";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TServiceType = {
  id: string;
  title: string;
  image: string;
};

const Services = () => {
  const { data: servicesData, isLoading, isError } = useGetServices();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      return await fetch(
        `https://event-management-server-bice.vercel.app/api/services/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Successfully deleted service!");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something went wrong......</p>;
  }

  const handleDelete = (id: string) => {
    mutate(id);
  };

  const handleUpdated = (service: HTMLFormElement) => {
    console.log(service);
  };

  return (
    <div className="p-4 border-1 shadow-md">
      <div className="my-4 space-x-6">
        <Link to="/">
          <Button className="text-xl py-6 px-8" variant={"outline"}>
            Go To Home
          </Button>
        </Link>
        <Link to="/admin/add-service">
          <Button className="text-xl py-6 px-8" variant={"outline"}>
            Add Service
          </Button>
        </Link>
      </div>
      <Table className="p-3">
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className="">Serial</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="">Edit</TableHead>
            <TableHead className="">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {servicesData.map((service: TServiceType, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="text-lg">{service?.title}</TableCell>
              <TableCell>
                <img
                  className="w-12 h-10 rounded-sm"
                  src={service.image}
                  alt=""
                />
              </TableCell>
              <TableCell onClick={() => handleUpdated(service.id)}>
                {/* <NavLink to="/admin/update-service"> */}
                <Edit className="size-8 bg-blue-600 text-white p-2 rounded-sm " />
                {/* </NavLink> */}
              </TableCell>
              <TableCell>
                <Trash2
                  onClick={() => handleDelete(service.id)}
                  className="size-8 bg-red-600 text-white p-2 rounded-sm ml-3"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Services;
