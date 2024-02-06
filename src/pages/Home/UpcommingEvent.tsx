import Container from "@/components/shared/Container";
import image from "../../assets/Images/Photo.png";
import { Database } from "lucide-react";

const UpcommingEvent = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 my-16 items-center">
      <div className="text-left flex flex-col gap-5">
        <h1 className="text-secondary font-bold text-4xl">Recent Events</h1>
        <p className="w-11/12 text-lg ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="bg-[#FFF9EE] w-11/12 mt-3 rounded-md">
          <div className="m-4 border-b-2 pb-6 flex gap-4">
            <Database className="text-[#F249C8] mt-1 w-10" />
            <div>
              <h1 className="text-dark text-lg font-medium mb-1">
                Golf Clubbers Annual Agenda
              </h1>
              <p className="text-dark-gray">
                Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                tortor in tellus dictum pellentesque.{" "}
              </p>
            </div>
          </div>
          <div className="m-4 pt-2 flex gap-4">
            <Database className="text-[#7534FF] mt-1 w-10" />
            <div>
              <h1 className="text-dark text-lg font-medium mb-1">
                Golf Clubbers Annual Agenda
              </h1>
              <p className="text-dark-gray">
                Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                tortor in tellus dictum pellentesque.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="h-[80%]" src={image} alt="" />
    </Container>
  );
};

export default UpcommingEvent;
