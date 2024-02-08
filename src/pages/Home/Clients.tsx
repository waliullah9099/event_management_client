import Container from "@/components/shared/Container";
import image1 from "../../assets/Images/Client/Group 5.png";
import image2 from "../../assets/Images/Client/Logo.png";
import image3 from "../../assets/Images/Client/Logo1.png";
import image4 from "../../assets/Images/Client/Logo3.png";
import image5 from "../../assets/Images/Client/Logo4.png";
import image7 from "../../assets/Images/Client/amazon.png";

const Clients = () => {
  return (
    <Container className="my-16">
      <h1 className="text-center text-[#061C3D] text-lg font-medium">
        We have <span className="text-primary">23k+</span> Satisfied & Trusted
        Custome
      </h1>
      <div data-aos="zoom-in" className="flex justify-between pt-4">
        <img src={image3} alt="" />
        <img src={image2} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image7} alt="" />
        <img src={image1} alt="" />
      </div>
    </Container>
  );
};

export default Clients;
