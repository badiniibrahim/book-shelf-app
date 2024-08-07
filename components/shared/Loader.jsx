import { Image } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <Image
        src={"/loader.svg"}
        alt="loader"
        height={100}
        width={100}
        className="object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
        Loading is in progress <br /> Please wait...
      </p>
    </div>
  );
};

export default Loader;
