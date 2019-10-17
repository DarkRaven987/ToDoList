import React from 'react';
import {getCookie} from "../../utility";

export const Header = () => {
  return(
      <div className="header">
        <h2>To Do List Website</h2>
        {
          getCookie("user_id") && <h3 onClick={() => {
            document.cookie='user_id=0; max-age=0';
            document.location.href = '/login';
          }}>Logout</h3>
        }
      </div>
  )
}
