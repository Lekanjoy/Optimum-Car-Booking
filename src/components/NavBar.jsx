import React from 'react'
import UserDetails from './UserDetails'
import NavItems from './NavItems'

function NavBar() {
  return (
    <header className="py-[22px] px-[90px] flex justify-between cursor-pointer border-2 border-x-0 border-bottom border-[#F6F7F9]">
      <NavItems />
      <UserDetails />
    </header>
  );
}

export default NavBar     