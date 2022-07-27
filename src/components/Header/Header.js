import React from 'react';
import './Header.css'
import logo from '../../assets/images/logo.png'
import { BiSearchAlt2 } from "react-icons/bi";


const Header = () => {
    return (
        <div>
            <div className="header-container container d-flex justify-content-between py-4">
                <div className="logo">
                    <img className='img-fluid' src={logo} alt="logo" />
                </div>
                <div className="search-bar">
                    <input className='border-0 rounded-pill' type="search" placeholder='Search for your favorite groups in ATG' name="" id="" />
                    <BiSearchAlt2 />
                </div>
                <div className="signup">
                    <div class="dropdown">
                        <button class="btn  dropdown-toggle fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Create account. <span className='text-primary fw-bolder'>It’s free! </span>                       
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Sign In</a></li>
                            <li><a class="dropdown-item" href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;