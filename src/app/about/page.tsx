import Image from "next/image";
import React from "react";
import img from "../../../public/background/bg2.jpeg";
import Button from "../components/button/Button";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen flex flex-col justify-center gap-12 items-start overflow-x-hidden"
    >
      <div className="flex justify-center items-center">

        <div className="flex flex-col items-center gap-10">
          {/* Heading  */}
          <div className="flex justify-start -ml-40">
            <h2 className="text-5xl font-bold w-[60%] text-black/80 text-left">
              We&#39;re Delivering Only Exceptional Quality Work
            </h2>
          </div>

          <div className="relative left-1/2 -translate-x-1/3 flex gap-12">
            <Image src={img} alt="image" className="w-1/3" />

            <div className=" flex flex-col gap-4 text-gray-400 w-1/4">
              <p>
                We are formed by a team with extensive experience in innovation
                and dital transformation. We work mainly in the creation of
                digital solutions and products based on new technologies in an
                Open innovation model.
              </p>

              <p>
                Our team of creative and technological Geeks think and and work
                differently.
              </p>

              <Button />

              <div className="bg-blue-500 w-[30%] h-60 absolute top-80 left-[28%] flex items-center justify-between px-10 py-6">

                
                <div className="col-span-1 -mt-4">
                  <p className=" text-white bg-red-500 w-12 h-5 rounded-md text-sm px-2 ml-7">987.4</p>
                  <p className="text-white font-bold">People</p>
                  <h3 className="text-white text-6xl py-4 font-bold">254+</h3>
                  <p className="text-white font-bold">Adipicing elit, sed do eiusm</p>
                </div>

                <div className="col-span-1">
                  <p className="text-white font-bold">World Officies</p>
                  <h3 className="text-white text-6xl py-4 font-bold">12</h3>
                  <p className="text-white font-bold">sed do eiusmod tempor</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
