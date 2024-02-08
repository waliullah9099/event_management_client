export const getEvents = async () => {
  const res = await fetch(
    "https://event-management-server-bice.vercel.app/api/events"
  ).then((res) => res.json());

  if (!res.success) {
    throw new Error("Something went wrong");
  }

  return res;
};
