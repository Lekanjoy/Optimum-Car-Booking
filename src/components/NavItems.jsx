import React from 'react'
import {Link} from 'react-router-dom'

function NavItems() {
  return (
    <div className="flex gap-x-16 items-center">
        <h1 className="font-bold text-blueLogo text-xl tracking-widest">OPTIMUM</h1>
        <ul className="inline-flex gap-x-2">
            <li id='booking' className="text-sm font-bold "><Link to="/">Booking</Link></li>
            <li className="text-sm font-semibold text-textNav"><Link to="/about">About</Link> Us</li>
            <li className="text-sm font-semibold text-textNav"><Link>Support</Link></li>
            <li className="text-sm font-semibold text-textNav"><Link>Term and Conditions</Link></li>
        </ul>
    </div>
  )
}

export default NavItems