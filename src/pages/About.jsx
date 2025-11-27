import React from "react";
import Socials from "./Socials";
import Hero from "./Hero";

const About = () => {
  return (
    <div>
        <div className="text-center p-10 py-10 select-none">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Ryan He
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Machine Learning Software Engineer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            MSCS Candidate @ Georgia Tech
          </p>
        </div>
        <Socials />
        <Hero />
    </div>
  );
};

export default About;
