import Container from "@/components/shared/Container";
import TittleSection from "@/components/shared/TittleSection";
import image1 from "../../assets/Images/Gallery/Picture.png";
import image2 from "../../assets/Images/Gallery/Picture (1).png";
import image4 from "../../assets/Images/Gallery/Picture (2).png";
import image5 from "../../assets/Images/Gallery/Picture (3).png";
import image6 from "../../assets/Images/Gallery/Picture (4).png";
import image7 from "../../assets/Images/Gallery/Col.png";
import image8 from "../../assets/Images/Gallery/Picture (6).png";
import image9 from "../../assets/Images/Gallery/Picture (7).png";
import image10 from "../../assets/Images/Gallery/Picture (8).png";
import image11 from "../../assets/Images/Gallery/Picture (9).png";
import image12 from "../../assets/Images/Gallery/Picture (10).png";
import image13 from "../../assets/Images/Gallery/Picture (11).png";

const Gallery = () => {
  return (
    <Container>
      <TittleSection
        title="Gallery"
        decs="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />
      <div className="grid grid-cols-7 w-[98%] justify-center items-center mx-auto py-8 ">
        <img data-aos="fade-down-right" src={image1} alt="" />
        <div data-aos="zoom-out-up" className="row-span-2 flex items-center">
          <img src={image4} alt="" />
        </div>
        <img data-aos="fade-up" data-aos-duration="1000" src={image5} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={image8} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={image10} alt="" />
        <div data-aos="zoom-out-up" className="row-span-2 flex items-center">
          <img src={image7} alt="" />
        </div>
        <img data-aos="fade-up" data-aos-duration="1000" src={image12} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={image2} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={image6} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={image9} alt="" />
        <img data-aos="fade-up" data-aos-duration="1000" src={image11} alt="" />

        <img data-aos="fade-down-left" src={image13} alt="" />
      </div>
    </Container>
  );
};

export default Gallery;
