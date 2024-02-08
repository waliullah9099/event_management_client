import Clients from "./Clients";
import Contact from "./Contact";
import Events from "./Events";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Info from "./Info";
import Price from "./Price";
import RecentEvents from "./RecentEvents";
import Reviews from "./Reviews";
import Services from "./Services";
import Test from "./Test";
import UpcommingEvent from "./UpcommingEvent";

const Home = () => {
  return (
    <div>
      <div className="bg-light-gray">
        <Hero />
      </div>
      <Services />
      <Events />
      <Price />
      <Test />
      <Gallery />
      <RecentEvents />
      <UpcommingEvent />
      <Clients />
      <Reviews />
      <Info />
      <Contact />
    </div>
  );
};

export default Home;
