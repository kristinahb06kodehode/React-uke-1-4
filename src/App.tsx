// Import necessary components and dependencies from react-router-dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import individual page components
import Landing from "./pages/landing/LandingPage";
import Home from "./pages/home/Home";
import About from "./pages/about/AboutPage";
import NotFound from "./pages/notfound/NotFound";
import Layout from "./pages/layout/Layout";

// Define the main App component as a functional component
const App: React.FC = () => {
  return (
    // Use BrowserRouter to enable routing
    <Router>
      {/* Define routes for the application */}
      <Routes>
        {/* Main Layout route that wraps all other routes */}
        <Route path="/" element={<Layout />}>
          {/* Landing page route */}
          <Route index element={<Landing />} />
          {/* Home page route */}
          <Route path="/home" element={<Home />} />
          {/* About page route */}
          <Route path="/about" element={<About />} />
          {/* Not Found page route */}
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
