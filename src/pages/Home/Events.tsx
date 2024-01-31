import Container from "@/components/Container";
import TittleSection from "@/components/TittleSection";
import image1 from "../../assets/Images/eventItems/Rectangle 2989 (1).png";
import image2 from "../../assets/Images/eventItems/Rectangle 2989 (2).png";
import image3 from "../../assets/Images/eventItems/Rectangle 2989 (3).png";
import image4 from "../../assets/Images/eventItems/Rectangle 2989 (4).png";
import image5 from "../../assets/Images/eventItems/Rectangle 2989 (5).png";
import image6 from "../../assets/Images/eventItems/Rectangle 2989.png";

const Events = () => {
  return (
    <Container className="my-14">
      <TittleSection
        title="Event Items"
        decs="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-3">
          <div className="col-span-6 bg-light-gray rounded-md p-3">
            <img src={image6} />
            <p className="text-black text-xl pt-2">TED Conference</p>
          </div>
          <div className="col-span-6 bg-light-gray rounded-md p-3">
            <img src={image1} />
            <p className="text-black text-xl pt-2">Super Bowl</p>
          </div>

          <div className="col-span-3 bg-light-gray rounded-md p-3">
            <img src={image5} />
            <p className="text-black text-xl pt-2">Electronics Show</p>
          </div>
          <div className="col-span-3 bg-light-gray rounded-md p-3">
            <img src={image4} />
            <p className="text-black text-xl pt-2">Oktoberfest</p>
          </div>
          <div className="col-span-6 bg-light-gray rounded-md p-3">
            <img src={image3} />
            <p className="text-black text-xl pt-4">Tour de France</p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-light-gray rounded-md p-3">
          <img src={image2} />
          <p className="text-black text-xl pt-2">Cannes Festival</p>
        </div>
      </div>
    </Container>
  );
};

export default Events;
