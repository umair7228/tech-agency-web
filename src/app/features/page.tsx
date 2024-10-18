import React from "react";
import img1 from "../../../public/background/business-1.jpg";
import img2 from "../../../public/background/business-2.jpg";
import marketing from "../../../public/icons/marketing.png";
import management from "../../../public/icons/management.png";
import Image from "next/image";
import Button from "../components/button/Button";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-full pb-44 lg:pb-20 pt-20 lg:pt-14 flex flex-col gap-4 bg-slate-200 justify-center items-center overflow-x-hidden"
    >
      <h2 className="text-5xl font-bold text-center">
        We&#39;re provide <br /> invest & business services
      </h2>

      {/* parent div  */}
      <div className="grid grid-cols-12 gap-6">
        {/* child divs  */}

        <div className="col-span-6 flex flex-col items-center justify-center bg-white/80 lg:p-6 p-8 gap-5 lg:w-[450px] lg:h-[350px] w-[500px] h-[400px]">
          <Image src={marketing} alt="Marketing Image" className="w-24 lg:w-20" />

          <h3 className="text-2xl font-bold">Marketing strategy</h3>
          <p className="text-center text-gray-500">
            A marketing strategy refers to a business&#39;s overall game plan for
            reaching prospective consumers and turning them into customers of
            their products or services.
          </p>
          <Button />
        </div>

        <div className="col-span-6 lg:w-[450px] lg:h-[350px] w-[500px] h-[400px]">
          <Image src={img1} alt="Meetup Image" className="w-[100%] h-[100%]" />
        </div>

        <div className="col-span-6 lg:w-[450px] lg:h-[350px] w-[500px] h-[400px]">
          <Image src={img2} alt="Meetup Image" className="w-[100%] h-[100%]" />
        </div>

        <div className="col-span-6 flex flex-col items-center justify-center bg-white/80 p-8 gap-5 lg:w-[450px] lg:h-[350px] w-[500px] h-[400px]">
          <Image src={management} alt="Management Icon" className="w-24" />

          <h3 className="text-2xl font-bold">Management</h3>
          <p className="text-center text-gray-500">
            Business & Management is one of the most popular fields of study,
            teaching you everything there is to know about running a successful
            business.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Features;
