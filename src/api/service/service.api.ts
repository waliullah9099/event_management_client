// import axios from "axios";

// export const getServices = async () => {
//   return await axios.get(
//     "https://event-management-server-bice.vercel.app/api/services"
//   );
// };

export const getServices = async () => {
  const res = await fetch(
    "https://event-management-server-bice.vercel.app/api/services"
  ).then((res) => res.json());

  if (!res.success) {
    throw new Error("Something went wrong");
  }

  return res;
};
