import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Socials = () => {
  const playSocialsHoverSound = () => {
    new Audio("src/assets/bubble-pop.wav").play();
  };

  return (
    <div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <a
            href="https://github.com/RyanHJS/"
            target="_blank rel=“noreferrer”"
          >
            <AiFillGithub
              className="cursor-pointer hover:bg-cyan-300 rounded-full"
              onMouseEnter={playSocialsHoverSound}
            />
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <a href="https://www.linkedin.com/in/ryanhjs/" target="_blank">
            <AiFillLinkedin
              className="cursor-pointer hover:bg-cyan-300 rounded-full"
              onMouseEnter={playSocialsHoverSound}
            />
          </a>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <a
            href="mailto: ryanhe.2026@gmail.com"
            target="_blank rel=“noreferrer”"
          >
            <AiOutlineMail
              className="cursor-pointer hover:bg-cyan-300 rounded-full"
              onMouseEnter={playSocialsHoverSound}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
