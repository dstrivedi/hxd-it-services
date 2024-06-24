import React from "react";
import "./Footer.css";
import Accordion from "../ui/accordion/Accordion";

const renderQuickLinks = () => {
  return (
    <div>
      <p>
        <a href="/" className="underline cursor-pointer">
          Home
        </a>
      </p>
      <br />
      <p>
        <a className="underline cursor-pointer">Services</a>
      </p>
      <br />
      <p>
        <a className="underline cursor-pointer">About</a>
      </p>
      <br />
      <p>
        <a className="underline cursor-pointer">Contact</a>
      </p>
    </div>
  );
};

const renderContacts = () => {
  return (
    <div>
      <p className="underline">pandyathem@gmail.com</p>
      <p className="underline">dstrivedi1112@gmail.com</p>
    </div>
  );
};

const renderWorkingHourse = () => {
  return (
    <div>
      <p>Monday - Friday</p>
      <p>8:30 AM - 5:30 PM</p>
      <br />
      <p>Saturday & Sunday</p>
      <p>12:00 PM - 4:00 PM</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="">
      <div className="background">
        <div className="hidden lg:flex text-white w-full justify-evenly">
          <div className="md:p-28">
            <h1 className="text-2xl font-bold mb-6 uppercase">Quick Links</h1>
            {renderQuickLinks()}
          </div>
          <div className="md:p-28">
            <h1 className="text-2xl font-bold mb-6 uppercase">Working hours</h1>
            {renderWorkingHourse()}
          </div>
          <div className="md:p-28 ">
            <h1 className="text-2xl font-bold mb-6 uppercase">Contact</h1>
            {renderContacts()}
          </div>
        </div>
        <div className="lg:hidden">
          <Accordion title="Quick Link">{renderQuickLinks()}</Accordion>
          <hr className="" />

          <Accordion title="Working hours">{renderWorkingHourse()}</Accordion>
          <hr className="" />

          <Accordion title="Contacts">{renderContacts()}</Accordion>
          <hr className="" />
        </div>
      </div>
      <small className="bg-[rgb(34,34,34)] text-white w-full h-10 items-center flex justify-center">
        Copyright © 2024 HxD<sup>TM</sup>. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
