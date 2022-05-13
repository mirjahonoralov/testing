import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
