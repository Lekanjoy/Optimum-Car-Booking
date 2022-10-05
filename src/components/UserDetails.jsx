import React from "react";
import like from '../assets/user-details/like_icon.svg'
import notif from '../assets/user-details/notification_icon.svg'
import settings from '../assets/user-details/settings_icon.svg'
import user_icon from '../assets/user-details/user_icon.svg'
import dropdown from '../assets/user-details/chevron-down.svg'

function UserDetails() {
  return (
    <div className="flex gap-x-[38px] items-center">
      <img src={like} alt="like icon" />
      <img src={notif} alt="notification icon" />
      <img src={settings} alt="settings icon" />
      <div className="user flex gap-x-2 items-center">
          <img src={user_icon} alt="user icon" />
          <img src={dropdown} alt="dropdown icon" />
      </div>
    </div>
  );
}

export default UserDetails;
