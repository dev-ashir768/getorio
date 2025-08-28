import React from "react";

const Footer = () => {
  return (
    <footer className="sm:py-5 py-4 border-t-2">
      <div className="container">
        <p className="text-[#11181f] font-normal text-[15px] leading-[23px] text-center">
          © {new Date().getFullYear()} Orio Technologies (Pvt.) Limited. All
          Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
