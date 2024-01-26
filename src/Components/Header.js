import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";


export const Title = () => (
    <a href = "/">
    <img 
       className= "logo"
       alt = "logo"
       src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&usqp=CAU"
    />
    </a>
);


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className = "header">
            <Title />
            <div className = "nav-items">
               <ul>
                  <li>
                  <Link to="/">Home </Link>
                  </li>
                  <li>
                  <Link to= "about">About </Link>
                  </li>
                  <li>
                  <Link to="contact">Contact US </Link>
                  </li>
                  <li>
                  <Link to="cart">Cart </Link>
                  </li>
               </ul>
            </div>
            {isLoggedIn ? (
                <button onClick= {() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick= {() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
}

export default Header;