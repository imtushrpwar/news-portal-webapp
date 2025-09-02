import { useState } from "react";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
