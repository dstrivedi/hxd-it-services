import { Metadata } from "next";
import React from "react";
import "./Services.css";

export const metadata: Metadata = {
  title: "Services - HxD IT Services",
  description: "",
  icons: {
    icon: "/favicon.ico?v=4",
  },
};

const ServicesPage = () => {
  return (
    <div className="mb-10">
      <div className="servicesBanner">
        <div className="relative text-center lg:p-40 py-20 px-10 text-white">
          <p className="text-4xl lg:text-6xl uppercase font-semibold mb-8">
            IT Services
          </p>
          <p className="lg:text-2xl text-lg">
            Elevate your business with expert technology solutions, <br />
            streamlining your success through innovative IT services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
