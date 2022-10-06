import React, {useState} from "react";
import like from '../assets/user-details/like_icon.svg'
import notif from '../assets/user-details/notification_icon.svg'
import settings from '../assets/user-details/settings_icon.svg'
import user_icon from '../assets/user-details/user_icon.svg'
import dropdown from '../assets/user-details/chevron-down.svg'
import Dropdown from "./Dropdown";
import {useAuth} from '../firebase'

function UserDetails() {
    const user = useAuth();

    const [showDropDown, setShowDropDown] = useState(false)

  return (
    <div className="flex gap-x-[38px] items-center ">
      <img src={like} alt="like icon" />
      <img src={notif} alt="notification icon" />
      <img src={settings} alt="settings icon" />
      <div className=" flex gap-x-2 items-center relative">
          <img src={user?.photoURL === '' ? user?.photoURL : user_icon} className=" w-8 h-8 rounded-full" alt="user icon" />
          <img src={dropdown} alt="dropdown icon"  onClick={() => setShowDropDown(!showDropDown)}/>
        {showDropDown &&  <div className="absolute top-12 right-[-5px] transition-all"><Dropdown setShowDropDown={setShowDropDown}/></div>}
      </div>
    </div>
  );
}

export default UserDetails;
