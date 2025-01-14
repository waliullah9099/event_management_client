import { NavLink } from "react-router-dom";
import Container from "./Container";
import moment from "moment";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const year = moment().year();
  return (
    <footer className="bg-[#334155]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-4 py-8">
          <div>
            <h1 className="text-2xl text-white font-bold">
              Event <span className="text-primary">360</span>
            </h1>
          </div>
          <div>
            <h2 className="text-white mb-4 font-semibold">Product</h2>
            <div className="text-light-gray flex flex-col justify-center items-start space-y-3">
              <NavLink to="/">Pricing</NavLink>
              <NavLink to="/">Overview</NavLink>
              <NavLink to="/">Browse</NavLink>
              <NavLink to="/">Accessibility</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-4 font-semibold">Solutions</h2>
            <div className="text-light-gray flex flex-col justify-center items-start space-y-3">
              <NavLink to="/">Brainstorming</NavLink>
              <NavLink to="/">Ideation</NavLink>
              <NavLink to="/">Wireframing</NavLink>
              <NavLink to="/">Research</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-4 font-semibold">Resources</h2>
            <div className="text-light-gray flex flex-col justify-center items-start space-y-3">
              <NavLink to="/">Help Center</NavLink>
              <NavLink to="/">Blog</NavLink>
              <NavLink to="/">Tutorials</NavLink>
              <NavLink to="/">FAQs</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-4 font-semibold">Support</h2>
            <div className="text-light-gray flex flex-col justify-center items-start space-y-3">
              <NavLink to="/">Contact Us</NavLink>
              <NavLink to="/">Developers</NavLink>
              <NavLink to="/">Documentation</NavLink>
              <NavLink to="/">Integrations</NavLink>
            </div>
          </div>
          <div>
            <h2 className="text-white mb-4 font-semibold">Company</h2>
            <div className="text-light-gray flex flex-col justify-center items-start space-y-3">
              <NavLink to="/">About</NavLink>
              <NavLink to="/">Press</NavLink>
              <NavLink to="/">Events</NavLink>
              <NavLink to="/" className="flex gap-2">
                Request Demo <ArrowRight className="w-4 mt-[2px]" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-8 text-light-gray border-t-[1px] border-slate-600">
          <p> @ {year}. All rights reserved.</p>
          <nav className="space-x-5">
            <NavLink to="/">Terms</NavLink>
            <NavLink to="/">Privacy</NavLink>
            <NavLink to="/">Contact</NavLink>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
