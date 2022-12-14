import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchResult from "./SearchResult";
import Recipe from "./Recipe";

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search-result/:search" element={<SearchResult />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
      </AnimatePresence>
  );
}

export default Pages;
