import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
export function Navbar(){
    return(
    <div>
      <nav className='navbar'>
      <div className='navbar-links'>
         <Link to='/' className='navbar-mainpage'>Main Page </Link>
         <Link to='/' className='navbar-mainpage'>Main Page </Link>
         <Link to='/' className='navbar-mainpage'>Main Page </Link>
       </div>
       <div className='navbar-rightcentered'>
          <div className='navbar-rightcentered-user'>
          <input type='text' className='navbar-search' placeholder='Search'/>
          <select className='navbar-rightcentered-select' name='language'>
          
            <option value='english'>EN</option>
            <option value='ukrainian'>UA</option>
          </select>
          </div>
          <div className='navbar-rightcentered-login'>
          <Link to='/login' className='navbar-login'>Login </Link>
          </div>
        </div>
      </nav>

        <hr/>
        </div>
    )
}