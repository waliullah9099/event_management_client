import { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type TEventType = {
  _id: HTMLFormElement;
  title: string;
  image: string;
};

const RecetnEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
      });
  }, []);

  const handleUpdated = (event: HTMLFormElement) => {
    console.log(event);
  };

  const handleDelete = (id: HTMLFormElement) => {
    fetch(`http://localhost:5000/api/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remaining = events.filter(
            (item: HTMLFormElement) => item._id !== id
          );
          setEvents(remaining);
          toast.success(`event deleted Successfully!`);
        }
      });
  };

  return (
    <div>
      <div className="my-4 space-x-6">
        <Link to="/">
          <Button className="text-xl py-6 px-8" variant={"outline"}>
            Go To Home
          </Button>
        </Link>
        <Link to="/admin/add-recent-event">
          <Button className="text-xl py-6 px-8" variant={"outline"}>
            Add Recent Event
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
          {events.map((event: TEventType, index) => (
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
              <TableCell onClick={() => handleUpdated(event)}>
                {/* <NavLink to="/admin/update-event"> */}
                <Edit className="size-8 bg-blue-600 text-white p-2 rounded-sm " />
                {/* </NavLink> */}
              </TableCell>
              <TableCell onClick={() => handleDelete(event._id)}>
                <Trash2 className="size-8 bg-red-600 text-white p-2 rounded-sm ml-3" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecetnEvents;
