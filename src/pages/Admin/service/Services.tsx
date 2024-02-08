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
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type TServiceType = {
  _id: HTMLFormElement;
  title: string;
  image: string;
};

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
      });
  }, []);

  const handleDelete = (id: HTMLFormElement) => {
    fetch(`http://localhost:5000/api/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remaining = services.filter(
            (item: HTMLFormElement) => item._id !== id
          );
          setServices(remaining);
          toast.success(`service deleted Successfully!`);
        }
      });
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
          {services.map((service: TServiceType, index) => (
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
              <TableCell onClick={() => handleUpdated(service._id)}>
                {/* <NavLink to="/admin/update-service"> */}
                <Edit className="size-8 bg-blue-600 text-white p-2 rounded-sm " />
                {/* </NavLink> */}
              </TableCell>
              <TableCell>
                <Trash2
                  onClick={() => handleDelete(service._id)}
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
