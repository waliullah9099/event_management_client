import Contact from "./Contact";
import Events from "./Events";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Info from "./Info";
import RecentEvents from "./RecentEvents";
import Services from "./Services";
import UpcommingEvent from "./UpcommingEvent";

const Home = () => {
  return (
    <div>
      <div className="bg-light-gray">
        <Hero />
      </div>
      <Services />
      <Events />
      <Gallery />
      <RecentEvents />
      <UpcommingEvent />
      <Info />
      <Contact />
    </div>
  );
};

export default Home;
