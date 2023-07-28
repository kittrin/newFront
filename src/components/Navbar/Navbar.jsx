import React from 'react';
import cls from "./Navbar.module.scss"
import logo from "../../assets/Vector.png"
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={cls.Navbar}>
            <div>
                <img src={logo} alt=""/>
                <Link to="/applications">Заявки</Link>
                <Link to="/new">Подать заявку</Link>
            </div>
            <div>
                <Link to="/profile">Профиль</Link>
            </div>
        </nav>
    );
};

export default Navbar;