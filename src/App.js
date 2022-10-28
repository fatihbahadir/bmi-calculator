import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Result from "./pages/Result";
import History from "./pages/History";
import Footer from "./components/FooterComponent";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div style={{ minHeight: "100vh",overflowX:'hidden', backgroundColor: "#e3f6f5" }}>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Result />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
