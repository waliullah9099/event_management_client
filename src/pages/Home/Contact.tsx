import Container from "@/components/Container";
import TittleSection from "@/components/TittleSection";
import { Button } from "@/components/ui/button";
import { DatePickerDemo } from "@/components/ui/datePicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contaxt = () => {
  return (
    <Container className="my-12">
      <TittleSection
        title="Contact Us"
        decs="Have questions or feedback? Contact us for more information on our game fair event."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 items-center py-6 ">
        <form className="space-y-4 w-11/12 border-light-gray border-2 shadow-md p-6">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="text" placeholder="Subject" />
          <DatePickerDemo />
          <Textarea placeholder="Message" className="resize-none h-32" />
          <Button className="shadow-md" variant="outline" type="submit">
            Subscribe
          </Button>
        </form>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116717.97795833701!2d89.04235947573255!3d23.909581585772145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe965536b7d61f%3A0x28fea367efdb38c9!2sKushtia!5e0!3m2!1sen!2sbd!4v1706743578503!5m2!1sen!2sbd"
            height="455"
            allowFullScreen
            loading="lazy"
            className="rounded-md w-11/12 lg:w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Contaxt;
