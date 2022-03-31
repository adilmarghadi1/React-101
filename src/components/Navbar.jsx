import React from 'react'
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'
import './Navbar.css'
import Home from './Home'
import About from './About'
import Contact from './Contact';
import Service from './Service';
export default function Navbar() {
    return (
        <div>

            <Router>
                <div className="All">
                <Link to='/' className="home" >Home</Link>
                <Link to='/about' className="home">Navbar</Link>
                <Link to='/Contact' className="contact" >Contact</Link>
                <Link to='/Service' className="Service" >Service</Link>

                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Service' element={<Service />} />
                </Routes>

            </Router>
        </div>
    )
}

