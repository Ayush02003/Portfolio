// import React from "react";
import { Download } from "lucide-react";
import hero from "../assets/hero.png";
import resumePdf from "../assets/Resume_Ayush.pdf";
export default function HeroSection() {
  return (
    <section className="relative w-full" data-aos="zoom-in-up" id="hero">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-linear-to-br frm-[#0c7fac] blur-2xxl invisible opacity-40"></div>
        <div className="h-20 w-3/4 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl"></div>
      </div>
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 xll:gap-14 gap-10 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <div className="lg:py-6">
            <div className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200">
                  Ayush
                </span>
                👋
              </h1>
            </div>
            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
              Aspiring Software Developer with a passion for creating clean,
              efficient, and user-focused applications. I enjoy learning new
              technologies, solving challenging problems, and turning ideas into
              meaningful solutions.
            </p>
            <div className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0">
              <button className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                <a
                  href="#contact"
                  // className="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center cursor-pointer"
                >
                <span className="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transperent"></span>
                  <span className="relative flex items-center justify-center text-white">
                    Hire Me
                  </span>
                </a>
              </button>
              <button className="border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                <div className="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                  <div className="svg-container ">
                    <Download size={18} className="text-primary" />
                    <div className="download-lodder text-white hidden"></div>
                  </div>
                  <a
                    href={resumePdf}
                    download="Resume_Ayush.pdf"
                    className="pl-2 text-primary"
                  >
                    Download Resume
                  </a>
                </div>
              </button>
            </div>
          </div>
          <div className="lg:h-full md:flex">
            <div className="w-full h-96 min-h-96 lg:min-h-[none] lg:w-full lg:h-full items-center relative">
              <div
                className="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20%)] bg-linear-to-r opacity-25 from-[#0c64ac]
                to-primary blur-2xl"
              ></div>
              <div
                className="absolute h-full z-10 p-2 overflow-hidden
                           top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                           lg:left-auto lg:translate-x-0 lg:right-10
                           rounded-[90%_70%_70%_30%/30%_30%_70%_70%]
                           shadow-lg border border-cyan-500 w-80 h-96"
              >
                <img
                  src={hero}
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 rounded-[90%_70%_70%_30%/30%_30%_70%_70%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
