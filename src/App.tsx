import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/landing/LandingPage";
import Home from "./pages/home/Home";
import About from "./pages/about/AboutPage";
import NotFound from "./pages/notfound/NotFound";
import Layout from "./pages/layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
