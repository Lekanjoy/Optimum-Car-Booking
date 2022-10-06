import React from 'react'

function NavItems() {
  return (
    <div className="flex gap-x-16 items-center">
        <h1 className="font-bold text-blueLogo text-xl tracking-widest">OPTIMUM</h1>
        <ul className="inline-flex gap-x-2">
            <li className="text-sm font-bold ">Booking</li>
            <li className="text-sm font-semibold text-textNav">About Us</li>
            <li className="text-sm font-semibold text-textNav">Support</li>
            <li className="text-sm font-semibold text-textNav">Term and Conditions</li>
        </ul>
    </div>
  )
}

export default NavItems