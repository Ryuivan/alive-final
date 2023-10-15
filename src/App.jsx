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
import Pleno2 from "./components/Gallery/Pleno2";
import Pleno3 from "./components/Gallery/Pleno3";
import BoothKesehatan from "./pages/BoothKesehatan";

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
        <Route exact path="/pleno-2" element={<Pleno2 />} />
        <Route exact path="/pleno-3" element={<Pleno3 />} />
        <Route exact path="/booth-kesehatan" element={<BoothKesehatan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

