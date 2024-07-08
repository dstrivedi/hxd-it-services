"use client";
import Banner from "../components/ui/banner/Banner";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="h-2/4">
        <Banner />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* <div className="w-full lg:w-1/2 ourMission"></div> */}
        <div className="w-full lg:w-1/2 bg-black text-white xl:py-20 xl:px-40 lg:py-10 lg:px-20 p-10">
          <h1 className="text-2xl lg:text-4xl text-semibold mb-3">
            Our Mission
          </h1>
          <p className="text-lg">
            &quot;Our mission is to deliver superior IT services that empower
            businesses to achieve their goals through innovative solutions,
            reliable support, and strategic guidance. We strive to enhance
            operational efficiency, optimize performance, and foster growth in
            an ever-evolving digital landscape. Our commitment is to build
            long-term partnerships based on trust, integrity, and a shared
            vision of success.&quot;
          </p>
        </div>
        {/* </div> */}
        {/* <div className="flex flex-col lg:flex-row justify-center items-center"> */}
        <div className="w-full lg:w-1/2 text-black xl:py-20 xl:px-40 lg:py-10 lg:px-20 p-10">
          <h1 className="text-2xl lg:text-4xl text-semibold mb-3">
            Our Vision
          </h1>
          <p className="text-lg">
            &quot;We envision becoming a leading global provider of
            transformative IT services, recognized for our exceptional quality,
            client-centric approach, and continuous innovation. By leveraging
            emerging technologies and industry best practices, we aim to drive
            sustainable value and empower organizations to thrive in a
            competitive market.&quot;
          </p>
        </div>
        {/* <div className="w-full lg:w-1/2 ourVision"></div> */}
      </div>
      <div className="w-full mx-auto xl:py-20 xl:px-40 lg:py-10 lg:px-20 p-10">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-8 mb-8">
          <h3 className="text-3xl lg:text-4xl font-bold">
            We offer a wide variety of <br className="hidden lg:block" />
            IT services to our clients.
          </h3>
          <button
            className="bg-black text-white px-10 py-2"
            onClick={() => router.push("/serivces")}
          >
            View services
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-8">
          <div className="flex w-full lg:w-1/2 gap-1 lg:gap-2">
            <img
              src="./mobile-app.png"
              alt="mobile-icon"
              className="h-[50px]"
            />
            <div>
              <h5 className="text-xl lg:text-2xl text-semibold mb-2 font-semibold">
                Mobile development
              </h5>
              <p className="text-lg">
                We carry more than just good coding skills. Our experience makes
                us stand out from other web development.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 gap-1 lg:gap-2">
            <img
              src="./software.png"
              alt="software-icon"
              className="h-[50px]"
            />
            <div>
              <h5 className="text-xl lg:text-2xl text-semibold mb-2 font-semibold">
                Web development
              </h5>
              <p className="text-lg">
                Create complex enterprise software, ensure reliable software
                integration and modernise your legacy system.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 gap-1 lg:gap-2">
            <img src="./uiux.png" alt="uiux-icon" className="h-[50px]" />
            <div>
              <h5 className="text-xl lg:text-2xl text-semibold mb-2 font-semibold">
                UI/UX Design
              </h5>
              <p className="text-lg">
                Build the product you need on time with an experienced team that
                uses a clear and effective design process.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="flex w-full lg:w-1/2 gap-1 lg:gap-2">
            <img src="./testing.png" alt="testing-icon" className="h-[50px]" />
            <div>
              <h5 className="text-xl lg:text-2xl text-semibold mb-2 font-semibold">
                QA Testing
              </h5>
              <p className="text-lg">
                Turn to our experts to perform comprehensive, multi-stage
                testing and auditing of your software.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 gap-1 lg:gap-2">
            <img
              src="./maintenance.png"
              alt="maintenance-icon"
              className="h-[50px]"
            />
            <div>
              <h5 className="text-xl lg:text-2xl text-semibold mb-2 font-semibold">
                IT Counsultancy
              </h5>
              <p className="text-lg">
                Trust our top minds to eliminate workflow pain points, implement
                new tech, and consolidate app portfolios.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 gap-1 lg:gap-2">
            <img
              src="./hierarchy.png"
              alt="hierarchy-icon"
              className="h-[50px]"
            />
            <div>
              <h5 className="text-xl lg:text-2xl text-semibold mb-2 font-semibold">
                Dedicated Team
              </h5>
              <p className="text-lg">
                Over the past decade, our customers succeeded by leveraging
                Intellectsoft’s process of building, motivating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
