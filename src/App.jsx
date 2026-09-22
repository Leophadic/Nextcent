// import { BrowserRouter } from "react-router";
// import {Routes, Route} from "react-router";
// import reactLogo from './assets/react.svg'
 import React from 'react';
 import Home from './Pages/Home/Home.jsx'; 
 import {Routes, Route} from "react-router";
// import Navbar from './component/Navbar/Navbar.jsx';
 import Features from './Pages/Features/Features.jsx';
 import Product from './Pages/Product/Product.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
//  import Blog from './Pages/Blog/Blog.jsx';
// import Home from './Pages/Home/Home.jsx';
// import Hero from './component/Hero/Hero.jsx';
// import Clients from './component/Clients/Clients.jsx';
// import Community from './component/Community/Community.jsx';
// import Unlock from './component/Unlock/Unlock.jsx';
// import Stats from './component/Stats/Stats.jsx';
// import SiteDesignUnlock from './component/SiteDesignUnlock/SiteDesignUnlock.jsx';
// import Testimonial from './component/Testimonial/Testimonial.jsx';
// import Blog from './component/Blog/Blog.jsx';
// import CTA from './component/CTA/CTA.jsx';
// import Footer from './component/Footer/Footer.jsx';

  function App() {
  return (
   
    <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Features" element={<Features />} />
  <Route path="/Product" element={<Product />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/Dashboard" element={<Dashboard />} />
  {/* <Route path="/Blog" element={<Blog />} /> */}
</Routes>

    </>
  );
}









// import './App.css'
// // import {useState} from 'react'



// const Card = ({title}) => {
//   const [hasLiked, setHasLiked] = useState(false);
//   return (
//     <div className='card'>
//       <h2>{title}</h2>
//       <button onClick={() => setHasLiked(!hasLiked)}>
// {hasLiked ? 'Liked' : 'Like'}
//       </button>
//     </div>
//   )
// }

// const App = () => {
// const [hasLiked, setHasLiked] = useState(false);


//   return (
//     <div>
//       <h2>Functiona Arrow Component</h2>
//       <Card title = "Eni" />
//        <Card  title = "More"/>
//         <Card title = "raph"/>
//     </div>
//   )
// }





export default App
