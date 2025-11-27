import { BsToggleOff, BsSunFill } from "react-icons/bs";

const Nav = ({ setDarkMode, darkMode }) => {
  const handleThemeSwitch = () => {
    setDarkMode(!darkMode);
    new Audio("src/assets/light-switch.mp3").play();
  };

  const playNameHoverSound = () => {
    new Audio("src/assets/bouncy-fart.mp3").play();
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
