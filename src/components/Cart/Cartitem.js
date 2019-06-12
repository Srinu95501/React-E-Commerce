import React from 'react';

export default function Cartitem({item,value}){
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeitem}=value
    return(
        <div className="row text-capitalize text-center my-2">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} className="img-fluid" style={{height:'5rem',width:'5rem'}} alt="product image" />
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">price : </span>
                <strong>${price}</strong>
            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                    </div>    
                </div>    
            </div> 
            <div className="mx-auto col-10 col-lg-2">
            <div className="cart-icon" onClick={()=>removeitem(id)}>
            <i className="fas fa-trash"/>
            </div>
            </div>
            <div className="mx-auto col-10 col-lg-2">
                <strong>item total : $ {total}</strong>
            </div>           
        </div>
    )
}