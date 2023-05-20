import React from "react";
import FooterBottom from "./FooterBottom";
import MidFooter from "./MidFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <div className="font-titleFont text-black -mb-5">
      <TopFooter />
      <MidFooter />
      <FooterBottom />
    </div>
  );
};

export default Footer;
