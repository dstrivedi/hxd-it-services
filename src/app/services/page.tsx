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
    <div className="">
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
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center bg-black">
          <div className="w-full lg:w-1/2">
            <img
              src="/webdev.jpg"
              alt="Web development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white px-10">
            <p className="text-lg mt-5 leading-8">
              Our web development team specializes in creating dynamic and
              responsive websites tailored to meet your business needs. Whether
              you need a simple informational site or a complex e-commerce
              platform, we use the latest technologies and best practices to
              ensure your website is both user-friendly and secure.
            </p>
            <p className="text-lg mt-5 leading-8 font-semibold">
              Services include:
            </p>
            <ul className="text-lg list-decimal ml-10 mt-5 leading-8">
              <li>Custom Website Design</li>
              <li>E-commerce Development</li>
              <li>Content Management Systems (CMS)</li>
              <li>Website Maintenance and Support SEO Optimization</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center bg-black">
          <div className="w-full lg:w-1/2 lg:order-last">
            <img
              src="/app-development.jpg"
              alt="App development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white px-10 lg:order-first">
            <p className="text-lg mt-5 leading-8">
              We offer comprehensive application development services to help
              you streamline your business processes and engage your customers
              more effectively. Our experienced developers can create custom
              applications that are scalable, secure, and perfectly aligned with
              your business objectives.
            </p>
            <p className="text-lg mt-5 leading-8 font-semibolds">
              Services include:
            </p>
            <ul className="text-lg list-decimal ml-10 mt-5 leading-8">
              <li>Mobile Application Development (iOS & Android)</li>
              <li>Web Application Development</li>
              <li> Custom Software Solutions</li>
              <li> Application Maintenanceand Support</li>
              <li> API Integration</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center bg-black">
          <div className="w-full lg:w-1/2">
            <img
              src="/ITconsultancy.jpg"
              alt="IT Consultancy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-white px-10">
            <p className="text-lg mt-5 leading-8">
              Our IT consultancy services are designed to help you navigate the
              complex world of technology. We provide expert advice and
              solutions to improve your IT infrastructure, enhance security, and
              optimize your operations. Let us help you leverage technology to
              achieve your business goals.
            </p>
            <p className="text-lg mt-5 leading-8 font-semibold">
              Services include:
            </p>
            <ul className="text-lg list-decimal ml-10 mt-5 leading-8">
              <li>IT Strategy and Planning</li>
              <li>Network and Infrastructure Design</li>
              <li>Cybersecurity Assessment and Implementation</li>
              <li>Cloud Services and Migration</li>
              <li>IT Support and Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
