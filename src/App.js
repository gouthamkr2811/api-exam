
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/includes/Header/Header";
import Login from './components/screens/Login/Login';
import Catagory from './components/screens/Catagory/Catagory';
import English from './components/screens/English/English';
import Malayalam from './components/screens/Malayalam/Malayalam';
import Signup from './components/screens/Singup/Singup';
// import Text from "./components/screens/Text"

 import English2 from './components/screens/English/English2';
 import English3 from './components/screens/English/English3';
 import English4 from './components/screens/English/English4';
 import English5 from './components/screens/English/English5';
//  import Header from './components/includes/Header/Header';

import Malayalam2 from './components/screens/Malayalam/Malayalam2';
import Malayalam3 from './components/screens/Malayalam/Malayalam3';
import Malayalam4 from './components/screens/Malayalam/Malayalam4';
import Malayalam5 from './components/screens/Malayalam/Malayalam5';







 





function App() {
  return (
    <Router>
   
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/" element={ <Header/>} />
        <Route  path="/starts" element={ <Catagory/>} />
        <Route  path="/english" element={ <English/>} />
        <Route  path="malayala" element={ <Malayalam/>} />
        <Route  path="sing" element={ <Signup/>} />

         <Route  path="/english2" element={ <English2/>} />
         <Route  path="/english3" element={ <English3/>} />
         <Route  path="/english4" element={ <English4/>} />
         <Route  path="/english5" element={ <English5/>} /> 
         <Route  path="/header" element={ <Header/>} /> 

        <Route  path="malayala2" element={ <Malayalam2/>} />
        <Route  path="malayala3" element={ <Malayalam3/>} />
        <Route  path="malayala4" element={ <Malayalam4/>} />
        <Route  path="malayala5" element={ <Malayalam5/>} />



      </Routes>
    </Router>
  );
}

export default App;
