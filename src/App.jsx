import React,{Component} from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component{
  render(){
    return(
      <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="/"  element={<News key="general" PageSize={6} country='in' category="general"/>}/>
       <Route path="/business" element={<News key="business" PageSize={6} country='in' category="business"/>}/>
       <Route path="/entertainment" element={<News key="entertainment" PageSize={6} country='in' category="entertainment"/>}/>
       <Route path="/general" element={<News key="general" PageSize={6} country='in' category="general"/>}/>
       <Route path="/health" element={<News key="health" PageSize={6} country='in' category="health"/>}/>
       <Route path="/science" element={<News key="science" PageSize={6} country='in' category="science"/>}/>
       <Route path="/sports" element={<News key="sports" PageSize={6} country='in' category="sports"/>}/>
       <Route path="/technology" element={<News key="technology" PageSize={6} country='in' category="technology"/>}/>
       </Routes>
       </BrowserRouter>
       <Footer/>
      </>
    )
  }
}

export default App