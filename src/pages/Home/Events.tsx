import Container from "@/components/shared/Container";
import TittleSection from "@/components/shared/TittleSection";
import { useEffect, useState } from "react";

type TEventType = {
  _id: HTMLFormElement;
  title: string;
  image: string;
};

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
      });
  }, []);

  return (
    <Container className="my-14">
      <TittleSection
        title="Event Items"
        decs="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-3">
          <div className="col-span-6 bg-light-gray rounded-md p-3">
            {events.slice(0, 6).map((item: TEventType, index) => (
              <div key={index}>{index === 0 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">TED Conference</p>
          </div>
          <div className="col-span-6 bg-light-gray rounded-md p-3">
            {events.slice(0, 6).map((item: TEventType, index: number) => (
              <div key={index}>{index === 1 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">Super Bowl</p>
          </div>

          <div className="col-span-3 bg-light-gray rounded-md p-3">
            {events.slice(0, 6).map((item: TEventType, index) => (
              <div key={index}>{index === 2 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">Electronics Show</p>
          </div>
          <div className="col-span-3 bg-light-gray rounded-md p-3">
            {events.slice(0, 6).map((item: TEventType, index) => (
              <div key={index}>{index === 3 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-2">Oktoberfest</p>
          </div>
          <div className="col-span-6 bg-light-gray rounded-md p-3">
            {events.slice(0, 6).map((item: TEventType, index) => (
              <div key={index}>{index === 4 && <img src={item.image} />}</div>
            ))}
            <p className="text-black text-xl pt-4">Tour de France</p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-light-gray rounded-md p-3">
          {events.slice(0, 6).map((item: TEventType, index) => (
            <div key={index}>{index === 5 && <img src={item.image} />}</div>
          ))}
          <p className="text-black text-xl pt-2">Cannes Festival</p>
        </div>
      </div>
    </Container>
  );
};

export default Events;
