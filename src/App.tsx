import React from "react";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Landing from "./pages/landing/LandingPage";
import Home from "./pages/home/Home";
import About from "./pages/about/AboutPage";
import NotFound from "./pages/notfound/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route Component={NotFound} />
      </Router>
    </BrowserRouter>
  );
};

export default App;
