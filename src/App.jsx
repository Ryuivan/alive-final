import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Flow from "./pages/Flow";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Pleno1 from "./components/Gallery/Pleno1";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/flow" element={<Flow />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/pleno-1" element={<Pleno1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

