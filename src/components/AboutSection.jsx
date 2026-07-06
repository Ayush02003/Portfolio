// import React from 'react'
import about from "../assets/about.PNG";
const AboutSection = () => {
  return (
    <section className="text-white mt-12 relative overflow-hidden" id="about">
      <div className="max-w-8xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-20 relative z-10">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            More <span className="text-primary">About</span> Me
          </h2>
          <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
            I'm a Computer Engineering graduate passionate about software
            development and building practical, user-focused solutions. I enjoy
            learning new technologies and continuously improving my technical
            skills.
            <br />
            <br />I also enjoy solving Data Structures and Algorithms problems
            to strengthen my problem-solving abilities. I'm always eager to take
            on new challenges and grow as a software developer.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div className="text-center rounded-2xl bg-[#19243d] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">
                12+
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Technologies
              </p>
            </div>
            <div className="text-center rounded-2xl bg-[#19243d] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">
                15+
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Projects
              </p>
            </div>

            <div className="text-center rounded-2xl bg-[#19243d] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">
                150+
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Leetcode Problems
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-16 md:mt-0 flex justify-center lg:justify-end mr-10 relative"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-120">
            <div className="absolute inset-0 z-0 rounded-full shadow-lg border border-cyan-500   translate-x-4  translate-y-4 "></div>
            <div className="relative z-10 w-full h-full bg-[#19243d] rounded-full overflow-hidden border border-[#1f1641] ">
              <img
                src={about}
                alt="About"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
