import { BsToggleOff, BsSunFill } from "react-icons/bs";
import lightSwitchSound from "../assets/light-switch.mp3";
import bouncyFartSound from "../assets/bouncy-fart.mp3";

const lightSwitchAudio = new Audio(lightSwitchSound);
const bouncyFartAudio = new Audio(bouncyFartSound);

const Nav = ({ setDarkMode, darkMode }) => {
  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
    lightSwitchAudio.currentTime = 0;
    lightSwitchAudio.play();
  };

  const playNameHoverSound = () => {
    bouncyFartAudio.currentTime = 0;
    bouncyFartAudio.play();
  };

  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1
          className="font-burtons text-xl select-none animate-bounce hidden sm:flex"
          onMouseEnter={playNameHoverSound}
        >
          Ryan He
        </h1>
        <ul className="flex grow items-start justify-end">
          <li>
            {darkMode ? (
              <BsSunFill
                onClick={handleThemeSwitch}
                className="cursor-pointer text-2xl animate-[spin_3s_linear_infinite]"
              />
            ) : (
              <BsToggleOff
                onClick={handleThemeSwitch}
                className="cursor-pointer text-2xl transition-colors hover:text-gray-500"
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
