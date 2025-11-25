import { useState } from 'react'
import './style.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import Nav from './pages/Nav';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <h1>Eat my ass</h1>
        <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>
      </main>
    </div>
  )
}

export default App
