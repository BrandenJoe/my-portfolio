import React from 'react'
import '../index.css'
import {Link} from "react-router-dom";
 function Nav() {
  return (
    <nav className='nav-background'>
          <div className='personal__logo'>           
          Branden Herrera </div>
            <ul className='nav__link--list'>
              <li>
              <a href="" className='
              nav__link--anchor
              link__hover-effect
              link__hover-effect--black'> Languages</a>
              </li>
              <li>
                
              <a
              href ="#projects"
               className='
               nav__link--anchor
               link__hover-effect
               link__hover-effect--black'> Projects
               </a>
              </li>
              <li>
              <a href="/contact"
               className='
               nav__link--anchor
               nav__link--anchor-primary'
               > Contact</a>
              </li>
            </ul>
    </nav>
  )
}
export default Nav;