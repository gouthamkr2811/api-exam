
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/includes/Header/Header";
import Login from './components/screens/Login/Login';
import Catagory from './components/screens/Catagory/Catagory';
import English from './components/screens/English/English';
import Malayalam from './components/screens/Malayalam/Malayalam';




function App() {
  return (
    <Router>
   
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/" element={ <Header/>} />
        <Route  path="/starts" element={ <Catagory/>} />
        <Route  path="/english" element={ <English/>} />
        <Route  path="malayala" element={ <Malayalam/>} />


      </Routes>
    </Router>
  );
}

export default App;
