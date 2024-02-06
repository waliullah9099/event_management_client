import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image1 from "../../assets/Images/event//Rectangle 181.png";
import image2 from "../../assets/Images/event/Rectangle 182.png";
import image3 from "../../assets/Images/event/Rectangle 183.png";
import image4 from "../../assets/Images/event/Rectangle 184.png";
import image5 from "../../assets/Images/event/Rectangle 185.png";
import image6 from "../../assets/Images/event/Rectangle 186.png";

const RecentEvents = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 my-16 items-center">
      <div className="text-left flex flex-col gap-5">
        <h1 className="text-secondary font-bold text-4xl">Recent Events</h1>
        <p className="w-10/12 text-lg">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <Button className="w-48 h-12 text-lg">Learn More</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img src={image5} alt="" />
        <img src={image4} alt="" />
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image6} alt="" />
      </div>
    </Container>
  );
};

export default RecentEvents;
