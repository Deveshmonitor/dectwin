import React from "react";
import Container from "./../components/Container";
import Footer from "./../components/Footer";
import Services from "./../components/Services";
import { ImWhatsapp } from "react-icons/im";
import Testimonial from "./../components/Testimonial";
import Aboutus from "./../components/Aboutus";

function Home() {
  return (
    <>
      <Container />
      <Services />
      {/* <Testimonial /> */}
      <Aboutus />
      <Footer />{" "}
      <a
        href="https://wa.me/9454722998"
        className="whatsapp-button absolute bottom-14 right-16"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImWhatsapp
          className="fixed hover:animate-pulse"
          size={30}
          color="green"
        />
      </a>
    </>
  );
}

export default Home;
