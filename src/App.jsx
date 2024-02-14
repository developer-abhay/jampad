//Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Service/Services";
import Contact from "./pages/Contact/Contact";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
