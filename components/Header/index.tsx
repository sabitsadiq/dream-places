import React from "react";
import Image from "next/image";
import plane from "../../public/images/plane.svg";
import Button from "../Button";
import Link from "next/link";
// import { FiMenu } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <section className="fixed top-0 left-0 w-full bg-white z-40 shadow-lg">
      <div className="px-4 md:px-0 md:container  mx-auto flex justify-between items-center py-4">
        <div className="flex items-center lg:gap-2">
          <Image
            className="w-8"
            src={plane}
            width={20}
            height={20}
            alt="planeLogo"
          />
          <h4 className="text-base  font-medium">my Dream Place</h4>
        </div>
        <div className="md:flex hidden">
          <ul className="flex items-center text-base font-medium leading-3 justify-center gap-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>Discover</li>
            </Link>
            <Link href="/">
              <li>Activities</li>
            </Link>
            <Link href="/">
              <li>About Us</li>
            </Link>
            <Link href="/">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden">
          <FiMenu size={30} />
        </div>
        <div className="md:flex items-center gap-2 hidden">
          <Button className="flex-1 text-blue-500 border border-blue-500">
            Register
          </Button>
          <Button className="flex-1 bg-blue-500 text-white">Sign In</Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
