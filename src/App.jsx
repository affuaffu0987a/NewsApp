import React,{Component} from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

export class App extends Component{
  render(){
    return(
      <>
       <Navbar/>
       <News PageSize={6}/>
       <Footer/>
      </>
    )
  }
}

export default App