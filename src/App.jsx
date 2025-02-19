import { useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import { FilterProvider } from "./components/FilterContext"; 

function App() {
  return (
    <FilterProvider> 
      <NavBar />
      <Home />
    </FilterProvider>
  );
}

export default App;
