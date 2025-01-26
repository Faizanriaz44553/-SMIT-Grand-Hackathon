import React from "react";
import "./Header.css";
import DropdownComponent from "../dropdown/Dropdown";
// import {useNavigate} from 'react-router-dom'
const Header = () => {


  return (
    <div className="mainDiv">
      <div className="logoDiv">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vQe0LXmyD8WHGc02-vqWU06dJJQqw72NCg&s" alt="Sylani Welfare Logo" className="logoImage" />
      </div>
      <div className="navDiv">
       <DropdownComponent/>
      </div>
      <div className="extraDiv">
        {/* Add additional content here, if required */}
      </div>
    </div>
  );
};

export default Header;
