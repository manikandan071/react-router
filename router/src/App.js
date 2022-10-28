// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/about/about';
import Home from "./components/home/home";
import Team from "./components/team/team";
import './App.css';
import Contact from "./components/contact/contact";
import Product from "./components/product/product";
import Data from "./components/data/data";
// import Footer from "./components/footer/footer";

function App(){
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="About/:id" element={<About />} />
    <Route path="Contact" element={<Contact />}/>
    <Route path="Team" element={<Team />}/>
    <Route path="product" element={<Product />}/>
    <Route path="Data/:id" element={<Data />}/>
  </Routes>
  </BrowserRouter>)
}

// function App() {
//   return (
//     <div className="">
//       <Routes />
//     </div>
//   );
// }

export default App;
