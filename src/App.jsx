import { useState } from "react";
import "./style.css";
import Nav from "./pages/Nav";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen flex flex-col">
          <div className="grow">
            <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
            <About />
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
