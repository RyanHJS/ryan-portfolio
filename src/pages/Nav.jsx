import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = ({setDarkMode, darkMode}) => {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl select-none">Ryan He</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
