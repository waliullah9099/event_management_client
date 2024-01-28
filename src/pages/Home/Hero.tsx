import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import HeroImage from "../../assets/Images/Images.png";

const Hero = () => {
  return (
    <Container className="pt-12">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
        <div className="w-[50%]">
          <h1 className="text-secondary font-semibold lg:font-bold text-3xl lg:text-5xl uppercase pb-7">
            Best Event Management Firm
          </h1>
          <Button className="w-48 h-12 text-lg">Explore</Button>
        </div>
        <div className="w-[48%]">
          <p>
            Behind every successful event lies meticulous planning, where
            organizers delve into details like venue selection, logistics, and
            participant engagement. Creativity takes center stage, with themes
            and concepts breathing life into gatherings, leaving lasting
            impressions.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <img className="h-[615px]" src={HeroImage} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
