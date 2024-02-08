import Container from "@/components/shared/Container";
import TittleSection from "@/components/shared/TittleSection";
import { useEffect, useState } from "react";

type TEventsType = {
  _id: HTMLFormElement;
  title: string;
  image: string;
  size: string;
};

const Test = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        // Assuming data is an array of event objects
        setEvents(data.data);
      });
  }, []);

  return (
    <Container className="my-14">
      <TittleSection
        title="Event Items"
        decs="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="flex flex-col-reverse items-center md:flex-row gap-5 mt-16">
        <div className="flex flex-col-reverse md:flex-col ">
          <div className="bg-[#f2f2f2] p-4 rounded-lg ">
            {events.slice(0, 6).map((item, index) => (
              <div key={index}>{index === 0 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">TED Conference</p>
          </div>
          <div className="bg-[#f2f2f2] p-4 rounded-lg ">
            {events.slice(0, 6).map((item, index) => (
              <div key={index}>{index === 1 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">TED Conference</p>
          </div>
          <div className="bg-[#f2f2f2] p-4 rounded-lg ">
            {events.slice(0, 6).map((item, index) => (
              <div key={index}>{index === 2 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">TED Conference</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Test;
