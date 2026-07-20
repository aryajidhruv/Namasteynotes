import { useState } from 'react';
import {LOGO_URL} from '../utils/constant.js'

const Header =()=>{
    const [btnNameReact,setbtnNameReact]= useState('Login')
    console.log("header render")



    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li> 
                 <button className='Login-btn' onClick={()=>{ btnNameReact == 'Login'? setbtnNameReact('Logout'):setbtnNameReact('Login' )
                    
                 }}> 
                 {btnNameReact }
                 </button>
                </ul>


            </div>

        </div>
    )
};
export default Header;