import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import About from '../about/about'
import Contact from '../contact/contact'
import Team from '../team/team'
import Footer from '../footer/footer'
import Product from '../product/product'
import Data from '../data/data'
const Home = () => {
  return (
    <div>
     <div className='list-sec'>
        <Link className='list' to="About/9">About</Link>
        <Link className='list' to="Contact">Contact</Link>
        <Link className='list' to="Team">Team</Link>
     </div>
    <About />
    <Contact />
    <Team />
    <Footer />
    <Product />
    <Data />
    </div>
  )
}

export default Home