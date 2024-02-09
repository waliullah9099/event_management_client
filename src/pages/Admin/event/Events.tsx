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
import { useGetEvents } from "@/api/event/event.hook";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TEventType = {
  id: string;
  title: string;
  image: string;
};

const Events = () => {
  const { data: events, isLoading, isError } = useGetEvents();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      return await fetch(
        `https://event-management-server-bice.vercel.app/api/events/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Successfully deleted event!");
      queryClient.invalidateQueries({ queryKey: ["events"] });
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

  return (
    <div>
      <div className="my-4 space-x-6">
        <Link to="/">
          <Button className="text-xl py-6 px-8" variant={"outline"}>
            Go To Home
          </Button>
        </Link>
        <Link to="/admin/add-event">
          <Button className="text-xl py-6 px-8" variant={"outline"}>
            Add Event
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
          {events.map((event: TEventType, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="text-lg">{event?.title}</TableCell>
              <TableCell>
                <img
                  className="w-12 h-10 rounded-sm"
                  src={event.image}
                  alt=""
                />
              </TableCell>
              <TableCell>
                <Edit className="size-8 bg-blue-600 text-white p-2 rounded-sm " />
              </TableCell>
              <TableCell onClick={() => handleDelete(event.id)}>
                <Trash2 className="size-8 bg-red-600 text-white p-2 rounded-sm ml-3" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Events;
