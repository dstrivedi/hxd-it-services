import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import "./About.css";

export const metadata: Metadata = {
  title: "About Us - HxD IT Services",
  description: "",
  icons: {
    icon: "/favicon.ico?v=4",
  },
};

const AboutPage = () => {
  return (
    <div className="mb-10">
      <div className="aboutBanner">
        <div className="relative text-center lg:p-40 py-20 px-10 text-white">
          <p className="text-4xl lg:text-6xl uppercase font-semibold mb-8">
            About Us
          </p>
          <p className="lg:text-2xl text-lg">
            HXD IT Services was born with a passion to bring ideas and
            imagination to life.
          </p>
          <p className="lg:text-2xl text-lg">
            We believe in 3C&#39;s : Communicate, Collaborate and Create.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center p-14 gap-10">
          <div className="w-full lg:w-1/2 "></div>
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-2xl lg:text-4xl text-semibold mb-3">
              Integrity and Trust
            </h1>
            <p className="text-lg">
              We pledge to conduct all aspects of our business with honesty and
              the highest standards of integrity. Our words and actions are
              aligned, ensuring we treat our clients and employees with dignity,
              honesty, and respect. We are direct, maintain confidences, honor
              commitments, and take responsibility for our actions. Our
              reputation is our cornerstone.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center p-14 gap-10">
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-2xl lg:text-4xl text-semibold mb-3">
              Caring Relationships
            </h1>
            <p className="text-lg">
              Our success stems from the care we show our clients and employees.
              We leverage deep insights to build strong relationships and base
              our decisions on objective criteria to achieve the best long-term
              results for our clients’ companies, customers, employees, and
              owners.
            </p>
          </div>
          <div className="w-full lg:w-1/2 "></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center p-14 gap-10">
          <div className="w-full lg:w-1/2 "></div>
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-2xl lg:text-4xl text-semibold mb-3">
              Responsibility and Accountability
            </h1>
            <p className="text-lg">
              We take ownership of our work and hold ourselves accountable for
              delivering desired outcomes in a timely, cost-effective, and
              professional manner.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center p-14 gap-10">
          <div className="w-full lg:w-1/2  ">
            <h1 className="text-2xl lg:text-4xl text-semibold mb-3">
              Performance and Accuracy
            </h1>
            <p className="text-lg">
              In today’s fast-paced business environment, speed and accuracy are
              crucial. We excel at understanding our clients’ unique needs and
              delivering the most practical technical solutions swiftly, without
              compromising on quality.
            </p>
          </div>
          <div className="w-full lg:w-1/2 "></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
