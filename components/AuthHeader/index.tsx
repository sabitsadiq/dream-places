import Image from "next/image";
import React from "react";
import plane from "../../public/images/plane.svg";

const AuthHeader = () => {
  return (
    <div className="flex fixed top-0 md:left-16 ga-3 items-center p-4 w-full">
      <Image src={plane} width={20} height={20} alt="planeLogo" />
      <h4 className="text-sm  font-semibold">my Dream Place</h4>
    </div>
  );
};

export default AuthHeader;
