import Container from "@/components/shared/Container";
import TittleSection from "@/components/shared/TittleSection";
import { IoIosCheckmark } from "react-icons/io";
import { useGetServices } from "@/api/service/service.hook";

type TServiceType = {
  id: string;
  title: string;
  image: string;
  description: string[];
};

const Services = () => {
  const { data: services, isLoading, isError } = useGetServices();
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something went wrong......</p>;
  }

  return (
    <Container className="my-6">
      <TittleSection
        title="Our Services"
        decs="
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-2">
        {services.slice(0, 3).map((service: TServiceType) => (
          <div
            key={service.id}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="bg-gradient-to-b from-light-gray to-[#fafafa] shadow-sm rounded-sm px-5 py-8"
          >
            <img src={service.image} alt="" />
            <div>
              <h2 className="text-black font-bold text-3xl my-6">
                {service.title}
              </h2>
              <div>
                {service.description.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <IoIosCheckmark className="service-icon" />{" "}
                    <span>{item}</span>
                  </div>
                ))}
                {/* <div className="flex items-center gap-2 mb-2">
                  <IoIosCheckmark className="service-icon" />{" "}
                  <span>Meet Event Speaker</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <IoIosCheckmark className="service-icon" />{" "}
                  <span>Front Seat</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <IoIosCheckmark className="service-icon" />{" "}
                  <span>One day pas access all lecture</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}

        {/* <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="bg-light-gray rounded-sm px-5 py-8"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-black font-bold text-3xl -mt-2 mb-5">
                Corporate event
              </h2>
              <p>
                Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
                nibh ornare viverra. Ultrices faucibus neque velit risus ac id
                lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
                posuere felis arcu tellus tempus in in ultricies.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>One day pas access all lecture</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>Lunch and Snack</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>Meet Event Speaker</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>Front Seat</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>One day pas access all lecture</span>
              </div>
            </div>
            <Button className="w-full text-lg font-semibold h-14 mt-5">
              Check it out
            </Button>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="bg-gradient-to-b from-light-gray to-[#fafafa] shadow-sm rounded-sm px-5 py-8"
        >
          <img src={image2} alt="" />
          <div>
            <h2 className="text-black font-bold text-3xl my-6">
              Organization event
            </h2>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>One day pas access all lecture</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>Lunch and Snack</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>Meet Event Speaker</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>Front Seat</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <IoIosCheckmark className="service-icon" />{" "}
                <span>One day pas access all lecture</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Services;
