import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

type Inputs = {
  title: string;
  image: string;
};

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate } = useMutation({
    mutationFn: async (data) => {
      return await fetch(
        "https://event-management-server-bice.vercel.app/api/events/create-event",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Successfully created event!");
    },
  });

  const image_hosting_url =
    "https://api.imgbb.com/1/upload?key=00af13fcf3746f5d1b5cb9448a7a33df";

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        if (imageRes.success) {
          const imgURL = imageRes.data.display_url;
          const { title } = data;
          const newItem = { title, image: imgURL };
          // console.log(newItem);
          mutate(newItem);
        }
      });
  };

  return (
    <div className="p-12 relative">
      <form className="space-y-5 lg:w-3/4" onSubmit={handleSubmit(onSubmit)}>
        <div id="custom-border">
          <h1 className="text-center font-bold text-xl md:text-3xl mb-24">
            Add Event
          </h1>
        </div>
        <div className="space-y-2">
          <label className="text-xl">Title Name</label>
          <Input
            id="title"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-sm text-red-400">Title is required</span>
          )}
        </div>
        <div className="space-y-2 ">
          <label className="text-xl">Image</label>
          <Input
            id="image"
            type="file"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-sm text-red-400">Image is required</span>
          )}
        </div>

        <Button variant="outline" className="shadow-sm">
          Add Service
        </Button>
      </form>
    </div>
  );
};

export default AddEvent;
