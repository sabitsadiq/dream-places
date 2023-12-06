import React from "react";
import Image from "next/image";
import Hero from "../../public/images/hero.svg";
import { CiLocationOn } from "react-icons/ci";
import { PiCalendar } from "react-icons/pi";
import { BsPersonSquare } from "react-icons/bs";
import Button from "../Button";
import { BsExclamationTriangle } from "react-icons/bs";
import Link from "next/link";
const index = () => {
  return (
    <section className="w-full mt-28 px-4 md:px-0">
      <div className="relative w-full  min-h-[300px] h-[300px] md:h-[420px] xl:h-[480px] mx-auto">
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={Hero}
          width={120}
          height={120}
          alt="HeroImage"
        />
        <div className="hidden absolute sm:top-1/4 lg:top-2/5 xl:top-1/2 w-full sm:flex justify-center mx-auto">
          <div className=" text-white  mx-auto w-4/5 md:bg-blue- lg:bg-red- lg:w-3/5 xl:w-5/12  flex flex-col justify-center items-center text-center">
            <h1 className="font-semibold text-2xl">
              Enjoy Your Dream Vacation
            </h1>
            {/* <div className="w-4/5 md:w-1/2 lg:w-3/4 xl:w-2/5"></div> */}
            <p className="">
              Plan and book our perfect trip with expert advice,travel
              tips,destination information and inspiration from us
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 justify-between -translate-y-1/2 bg-white shadow-2xl p-4 rounded-lg w-4/5 mx-auto">
          <div className="flex items-center gap-2 bg-[#F2F2F2] p-2 rounded-lg">
            <CiLocationOn />
            <h2>Where are you going?</h2>
          </div>
          <div className="flex items-center gap-2 bg-[#F2F2F2] p-2 rounded-lg">
            <PiCalendar />
            <h2>Check in date</h2>
          </div>
          <div className="flex gap-2 items-center bg-[#F2F2F2] p-2 rounded-lg">
            <PiCalendar />
            <h2>check out Date</h2>
          </div>
          <div className="flex gap-2 items-center bg-[#F2F2F2] p-2 rounded-lg">
            <BsPersonSquare />
            <h2>Guest</h2>
          </div>
          <div>
            <Button className="flex-1 bg-[#2f80ED] text-white">Search</Button>
          </div>
        </div>
        <div className="bg-[#FCEFCA] rounded-lg flex items-center p-3 gap-2 ">
          <BsExclamationTriangle />
          <h2>
            Check the available logdes before you travel.
            <Link href="/" className="text-[#2f80ED]">
              Learn more
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default index;
