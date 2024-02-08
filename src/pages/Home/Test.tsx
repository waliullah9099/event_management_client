import Container from "@/components/shared/Container";
import TittleSection from "@/components/shared/TittleSection";
import { useEffect, useState } from "react";

const Test = () => {
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
        {events.map((event, index) => (
          <div key={index} className="">
            <img src={event.image} alt={`Event ${index + 1}`} />
            <p className="text-black text-xl pt-2">{event.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Test;
