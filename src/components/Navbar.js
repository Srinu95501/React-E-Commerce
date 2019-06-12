import React , {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.svg';
import styled from 'styled-components';
import {Buttoncontainer} from './Button';

export default class Navbar extends Component{
    render(){
        return (
        //     <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        //     <Link to="/">
        //         <img src={logo} alt="store" className="navbar-brand"/>
        //     </Link>
                
        //     <ul className="align-items-center navbar-nav">
        //         <li className="nav-item ml-5">
        //             <Link to="/" className="nav-link">
        //                 products
        //             </Link>
        //         </li>
        //     </ul>
        //     </nav>
        <Navwrapper className="navclass">
        <Link to="/" >
                 <img className="logo" src={logo} alt="store" />
             </Link>
        <Link to="/" className="wht">
                        <span > products</span>
                     </Link>     
        <Link to="/cart">
           <Buttoncontainer className="cartbutton">
            <span className="mr-2">
            <i className="fas fa-cart-plus"/>
            </span>
            my cart
            </Buttoncontainer> 
            </Link>             
        </Navwrapper>
               
        )
    }
}

const Navwrapper = styled.nav`
background:var(--mainBlue);
.wht{
    text-transform:capitalize;
    font-size:1.3rem;
}
`