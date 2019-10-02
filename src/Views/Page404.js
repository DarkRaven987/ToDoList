import React from 'react';
import MaterialIcon from 'material-icons-react'
import {Link} from "react-router-dom";

const Page404 = () => {
  return(
    <div className="container">
      <div className="content_container error_page">
        <div className="greatSizeTitle">
          ERROR 404: Page not found
        </div>
        <Link className="ErrorPageLink" to="/">
            <MaterialIcon icon="keyboard_backspace"/>
            <span>Go back to tasks list </span>
        </Link>
      </div>
    </div>
  )
};

export default Page404;