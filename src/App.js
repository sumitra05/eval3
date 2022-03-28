import { Nav } from './Components/Nav';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import {Login} from "./Components/Login";
import {Register} from "./Components/Register";
import {Products} from "./Components/Products"

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
       </Routes>
    </div>
  );
}

export default App;
