import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { FaXmark } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

const Price = () => {
  return (
    <Container>
      <div className="text-center flex flex-col justify-center items-center gap-4 py-8 mb-12 mt-20">
        <h1 className="text-secondary font-bold text-4xl">
          Explore our pricing plans
        </h1>
        <p className="lg:w-[90%] px-4 text-lg">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div data-aos="fade-right" className="border shadow-2xl rounded-lg">
          <div className=" p-10 flex flex-col justify-between items-center space-y-5 mt-3">
            <h1 className="font-bold text-3xl ">Starter</h1>
            <h1 className="text-[#156CFE] font-bold text-4xl ">$10</h1>
            <Button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-lg font-semibold"
            >
              Get this package
            </Button>
            <p className="text-dark-gray text-lg tracking-wider	">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
          </div>
          <button className="w-full bg-light-gray py-1 text-xl">
            All features options
          </button>
          <ul className=" p-10 flex flex-col justify-between items-start space-y-5">
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Free Custom Domain*</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Contributors</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Basic Website Metrics</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Squarespace Extension</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Customer Support</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Project Roles</span>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" className="border shadow-lg rounded-lg">
          <div className=" p-10 flex flex-col justify-between items-center space-y-5 mt-3">
            <h1 className="font-bold text-3xl ">Basic</h1>
            <h1 className="text-[#156CFE] font-bold text-4xl ">$15</h1>
            <Button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-lg font-semibold"
            >
              Get this package
            </Button>
            <p className="text-dark-gray text-lg tracking-wider	">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
          </div>
          <button className="w-full bg-light-gray py-1 text-xl">
            All features options
          </button>
          <ul className=" p-10 flex flex-col justify-between items-start space-y-5">
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Free Custom Domain*</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Contributors</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Basic Website Metrics</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Squarespace Extension</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Customer Support</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Project Roles</span>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" className="border shadow-lg rounded-lg">
          <Button className="w-full rounded-b-none">Popular Plan</Button>
          <div className=" px-10 pb-10 flex flex-col justify-between items-center space-y-4 mt-5">
            <h1 className="font-bold text-3xl ">Standard</h1>
            <h1 className="text-[#156CFE] font-bold text-4xl ">$35</h1>
            <Button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-lg font-semibold"
            >
              Get this package
            </Button>
            <p className="text-dark-gray text-lg tracking-wider	">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
          </div>
          <button className="w-full bg-light-gray py-1 text-xl">
            All features options
          </button>
          <ul className=" p-10 flex flex-col justify-between items-start space-y-5">
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Free Custom Domain*</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Contributors</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Basic Website Metrics</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Squarespace Extension</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Customer Support</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Project Roles</span>
            </li>
          </ul>
        </div>
        <div data-aos="fade-left" className="border shadow-lg rounded-lg">
          <div className=" p-10 flex flex-col justify-between items-center space-y-5 mt-3">
            <h1 className="font-bold text-3xl ">Professional</h1>
            <h1 className="text-[#156CFE] font-bold text-4xl ">$15</h1>
            <Button
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-lg font-semibold"
            >
              Get this package
            </Button>
            <p className="text-dark-gray text-lg tracking-wider	">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
          </div>
          <button className="w-full bg-light-gray py-1 text-xl">
            All features options
          </button>
          <ul className=" p-10 flex flex-col justify-between items-start space-y-5">
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Free Custom Domain*</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Unlimited Bandwith</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Contributors</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoIosCheckmark className="price-icon" />{" "}
              <span>Basic Website Metrics</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Squarespace Extension</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Customer Support</span>
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaXmark className="price-mark-icon" />
              <span>Project Roles</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Price;
