import React from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <footer
      style={{ background: "#084608", color: "white", fontWeight: "bold" }}
      className="z-10 py-6 px-4 md:px-12 text-center"
    >
      Develop & Design WaterLow © Copyright {moment().format("YYYY")}
    </footer>
  );
};

export default Footer;
