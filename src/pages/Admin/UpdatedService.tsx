import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

type Inputs = {
  title: string;
  items: string;
  image: string;
};

const UpdatedSerices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const image_hosting_url =
    "https://api.imgbb.com/1/upload?key=00af13fcf3746f5d1b5cb9448a7a33df";

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const description = data.items
      ? data.items.split(",").map((item) => item.trim())
      : [];
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
          const newItem = { title, description, image: imgURL };
          console.log(newItem);

          fetch("http://localhost:5000/api/services/create-service", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                toast.success("Successfully created service!");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });

    // const { mutateAsync, isError, isSuccess } = useMutation({
    //   mutationFn: async (data) => {
    //     return await fetch("http://localhost:5000/api/v1/services", {
    //       method: "POST",
    //       body: JSON.stringify(data),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //   },
    // })
  };

  return (
    <div className="p-12 relative">
      <form className="space-y-5 lg:w-3/4" onSubmit={handleSubmit(onSubmit)}>
        <div id="custom-border">
          <h1 className="text-center font-bold text-xl md:text-3xl mb-24">
            update service
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
          <label className="text-xl">
            Items <span className=" font-thin">(comma-separated)</span>
          </label>
          <Input
            id="items"
            placeholder="Item1, Item2, Item3"
            {...register("items")}
          />
          {errors.items && (
            <span className="text-sm text-red-400">Items are required</span>
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
          Update Service
        </Button>
      </form>
    </div>
  );
};

export default UpdatedSerices;
