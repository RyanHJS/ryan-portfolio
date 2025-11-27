import { motion } from "framer-motion";
import { useState } from "react";
import avatar from "../assets/avatar.jpeg";
import punchSound from "../assets/punch.wav";

const audio = new Audio(punchSound);

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);

  const handlePunch = () => {
    audio.currentTime = 0;
    audio.play();
    const newClickCount = clickCount + 1
    setClickCount(newClickCount);

    if (newClickCount >= 50) {
      alert("STOP IT!!!");
    }
  };

  let message = "";
  if (clickCount >= 40) {
    message = "Who hurt you???";
  } else if (clickCount >= 30) {
    message = "I'm training a model on your aggression";
  } else if (clickCount >= 20) {
    message = "Pixels have feelings too...";
  } else if (clickCount >= 10) {
    message = "Yo, Chill";
  }

  if (clickCount >= 50) {
    return null;
  }

  return (
    <div>
      <div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1, type: "tween" }}
          onClick={handlePunch}
        >
          <div
            className="
                    mx-auto 
                    bg-gradient-to-b 
                    from-teal-500 
                    rounded-full 
                    w-48
                    h-48
                    relative 
                    overflow-hidden 
                    mt-20 
                    md:h-72
                    md:w-72
                    "
          >
            <img
              src={avatar}
              className="absolute w-full h-full object-cover select-none"
              alt="avatar"
            />
          </div>
        </motion.div>
        {message && (
          <p className="font-burtons text-center dark:text-gray-200 mt-5">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
