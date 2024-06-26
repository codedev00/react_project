import React from "react";

import Home from "./Frontend/home";
import Courses from "./Frontend/course";
import About from "./Frontend/about";
import Header from "./Components/header";
import Footer from "./Components/footer";

import { BrowserRouter ,Route,Routes,} from "react-router-dom";

const Web=()=>{
  return(<>
    <BrowserRouter>
         <Header/>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/course" element={<Courses/>} />
             <Route path="/about" element={<About/>} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  </>)
}
export default Web;
