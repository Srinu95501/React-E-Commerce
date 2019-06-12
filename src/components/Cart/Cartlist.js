import React from 'react';
import Cartitem from './Cartitem';

export default function Cartlist({value}){
    const {cart} = value;
    console.log(value,cart)
    return(
        <div className="container-fluid">
         {cart.map(item=>{ 
         return <Cartitem item={item} value={value}/>})}
        </div>
    )
}