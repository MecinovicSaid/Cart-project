import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { FilterProvider } from "./components/FilterContext";
import NewProduct from "./pages/NewProduct";
import { useState } from "react";

function App() {
  const [newProducts,setNewProducts] = useState([]);

  
  return (
    <FilterProvider>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home newProducts={newProducts}/>} />
          <Route path="new-product" element={<NewProduct setNewProducts={setNewProducts}/>} />
        </Routes>
    </FilterProvider>
  );
}

export default App;
