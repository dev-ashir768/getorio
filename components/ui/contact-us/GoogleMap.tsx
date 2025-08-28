import React from "react";

const GoogleMap = () => {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57886.80024014705!2d67.05794367051735!3d24.934624269678483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3eb339de5304a9b1%3A0xf83a3c2aa3b034a4!2sD-63%2C%20Orio%20Technologies%20Pvt.%20Limited%2C%20Block%204%20Gulshan-e-Iqbal%2C%20Karachi!3m2!1d24.9345112!2d67.09909!5e0!3m2!1sen!2s!4v1721667451930!5m2!1sen!2s"
        width="100%"
        height="650"
        loading="lazy"
        style={{ border: "0" }}
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
