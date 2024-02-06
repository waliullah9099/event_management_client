import Container from "@/components/shared/Container";
import CounterScroller from "@/components/shared/CounterScroller";

const Info = () => {
  return (
    <div className="setBackImage py-24 mb-12 bg-fixed relative">
      <Container className="flex justify-between relative z-4">
        <div className="text-center">
          <div className="rigng-design">
            <h1 className="font-medium text-xl text-white">
              <CounterScroller start={1} end={25} />
            </h1>
          </div>
          <h1 className="font-medium text-l text-white pt-3">SPEAKERS</h1>
        </div>
        <div className="text-center">
          <div className="rigng-design">
            <h1 className="font-medium text-xl text-white">
              <CounterScroller start={1} end={30} />
            </h1>
          </div>
          <h1 className="font-medium text-l text-white pt-3">DAYS</h1>
        </div>
        <div className="text-center">
          <div className="rigng-design">
            <h1 className="font-medium text-xl text-white">
              <CounterScroller start={1} end={410} />
            </h1>
          </div>
          <h1 className="font-medium text-l text-white pt-3">PARTICIPANTS</h1>
        </div>
        <div className="text-center">
          <div className="rigng-design">
            <h1 className="font-medium text-xl text-white">
              <CounterScroller start={1} end={135} />
            </h1>
          </div>
          <h1 className="font-medium text-l text-white pt-3">WORKSHOPS</h1>
        </div>
        <div className="text-center">
          <div className="rigng-design">
            <h1 className="font-medium text-xl text-white">
              <CounterScroller start={1} end={40} />
            </h1>
          </div>
          <h1 className="font-medium text-l text-white pt-3">VENUE</h1>
        </div>
      </Container>
    </div>
  );
};

export default Info;
