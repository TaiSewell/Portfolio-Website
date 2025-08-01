/************************************************
 * Developer: Tai Sewell
 * File: App.jsx
 * Description: This file holds the funtion App()
 ***********************************************/
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

/*************************************************** 
 * Function: App()
 * Description: This functions is used as the render
   point for the site.
 * Return: returns the different Pages/Components
***************************************************/
function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
  )
}
export default App
