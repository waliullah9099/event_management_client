import Hero from "./Hero";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="bg-light-gray">
        <Hero />
      </div>
      <Services />
    </div>
  );
};

export default Home;
