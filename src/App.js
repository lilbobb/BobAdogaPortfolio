import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/Notfound";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
