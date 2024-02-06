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
import { NavLink } from "react-router-dom";

const Events = () => {
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
          const remaining = events.filter((item) => item._id !== id);
          setEvents(remaining);
          toast.success(`event deleted Successfully!`);
        }
      });
  };

  return (
    <Table className="p-3">
      <TableHeader>
        <TableRow className="text-lg">
          <TableHead className="">Serial</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="">Edit</TableHead>
          <TableHead className="">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="text-lg">{event?.title}</TableCell>
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
  );
};

export default Events;
