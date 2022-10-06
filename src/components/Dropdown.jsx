import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth, logOut} from '../firebase'

function Dropdown({setShowDropDown}) {
    const user = useAuth();
    const navigate = useNavigate();


    // Handle   Logout
    async function handleLogout(){
        try {
        await logOut()
            navigate('/login') 
            setShowDropDown(false)
        } catch (error) {
            alert('Unable to Logout')
            
        }

    }

  return (
    <div
      id="dropdown"
      className="w-72 p-4 bg-white rounded-md rounded-tr-none shadow-md border "
    >
      <div className=" w-full flex justify-between items-center gap-x-3 mb-3">
        <p className="text-textNav ">Username:</p>
        <p className="text-sm text-primaryText">@{user?.displayName || user?.email}</p>
      </div>
      <div className=" w-full flex justify-between items-center gap-x-3 mb-3 ">
        <p className="text-textNav ">Email:</p>
        <p className="text-sm text-primaryText">{user?.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="w-full mt-3 p-2 text-center bg-[#4285f4]  text-white font-medium rounded-md outline-none hover:bg-blue-400"
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Dropdown