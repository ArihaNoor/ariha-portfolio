import { HiClipboardDocumentList } from "react-icons/hi2";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-[70%] justify-center items-center mx-auto px-4 md:px-0 py-8">
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Creating <span className="text-golden">User Friendly</span> Web
          Solutions
        </h1>
        <p className="text-xl md:text-xl mb-4">
          Enhancing online presence with high-quality, responsive websites that
          connect you with your audience.
        </p>
        <button className="bg-black flex justify-center  text-sm md:text-xl items-center gap-2 text-white py-2 md:py-4 px-4 md:px-8 rounded-lg md:rounded-xl shadow-lg font-bold">
          <Link
            href="/Ariha Noor (CV).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2"
          >
            <HiClipboardDocumentList className=" text-sm md:text-xl" /> My Resume
          </Link>
        </button>
      </div>
      <div className="w-full md:w-3/5 flex justify-center">
        <img src="/Hero.png" className="" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
