import { useGetRecentEvents } from "@/api/recent.event/recent.hook";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

type TEventRecentType = {
  id: string;
  title: string;
  image: string;
};

const RecentEvents = () => {
  const { data: events, isLoading, isError } = useGetRecentEvents();

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something went wrong......</p>;
  }

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 my-16 items-center">
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
        className="text-left flex flex-col gap-5"
      >
        <h1 className="text-secondary font-bold text-4xl">Recent Events</h1>
        <p className="w-10/12 text-lg">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        {/* <div data-aos="zoom-in"> */}
        <Button data-aos="zoom-in" className="w-48 h-12 text-lg">
          Learn More
        </Button>
        {/* </div> */}
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        className="grid grid-cols-3 gap-4"
      >
        {events.map((item: TEventRecentType, index: number) => (
          <img key={index} src={item.image} alt="" />
        ))}
      </div>
    </Container>
  );
};

export default RecentEvents;
