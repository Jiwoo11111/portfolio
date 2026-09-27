import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import OpenMindDetail from "./pages/OpenMindDetail";
import LinkbraryDetail from "./pages/LinkbraryDetail";
import CoworkersDetail from "./pages/CoworkersDetail";
import GachisangaDetail from "./pages/GachisangaDetail";
import UsedMarketDetail from "./pages/UsedMarketDetail";

import "./App.css";

function Home() {
  return (
    <div className="portfolio-layout">
      {/* 왼쪽 고정 프로필 */}
      <aside className="portfolio-sidebar">
        <Hero />
      </aside>

      {/* 오른쪽 스크롤 영역 */}
      <div className="portfolio-main">
        <Navbar />

        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/openmind"
        element={<OpenMindDetail />}
      />

      <Route
        path="/projects/linkbrary"
        element={<LinkbraryDetail />}
      />

      <Route
        path="/projects/coworkers"
        element={<CoworkersDetail />}
      />

      <Route
        path="/projects/gachisanga"
        element={<GachisangaDetail />}
      />

      <Route
        path="/projects/panda-market"
        element={<UsedMarketDetail />}
      />
    </Routes>
  );
}

export default App;