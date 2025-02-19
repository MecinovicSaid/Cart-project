import React, { Children } from "react";
import { createContext, useState, useContext } from "react";

//kreiranje contexta
const FilterContext = createContext();

//hook samog filtera
export const useFilter = () => useContext(FilterContext);

//obavijanje aplikacije
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");


return (
  <FilterContext.Provider value={{ filter, setFilter }}>
    {children}
  </FilterContext.Provider>
)}
