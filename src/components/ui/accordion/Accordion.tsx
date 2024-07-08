"use client";

import React, { ReactElement, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import classNames from "classnames";

type IAccordion = {
  title: string;
  children: ReactElement;
};

const Accordion = ({ title, children }: IAccordion) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-5 pt-5">
      <label
        htmlFor="expandCollapse"
        className={classNames(
          "text-white w-full flex text-lg font-semibold mb-5 uppercase"
        )}
      >
        {title}
        {!open ? (
          <FaPlus className="ml-auto" onClick={() => setOpen(true)} />
        ) : (
          <FaMinus className="ml-auto" onClick={() => setOpen(false)} />
        )}
      </label>
      <div
        className={classNames("text-white inline-block h-fit pb-10", {
          hidden: !open,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
