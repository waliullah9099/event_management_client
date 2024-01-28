import { NavLink } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-light-gray">
      <Container>
        <nav className="h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Event <span className="text-primary">360</span>
          </h1>
          <ul className="space-x-5 text-lg font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
