import React , {Component} from 'react';
import {ProductConsumer} from '../context';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Product extends Component{
    render(){
        const{id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                     {value =>(<div className = "img-container p-5" onClick={()=>value.handledetail(id)}>
                        <Link to="/details">
                          <img src={img} alt="product img" className="card-img-top"/>  
                         </Link>
                         <button className="cart-btn " disabled={inCart?true:false} onClick={()=>{value.handleaddtocart(id);value.openModal(id)}}>
                         {inCart?<p className="text-capitalize mb-0" disabled>in cart</p>
                         :
                        <i className="fas fa-cart-plus"/>
                        }
                         </button>       
                    </div>)}   
                    
                    </ProductConsumer>
                    <div className="justify-content-between d-flex card-footer">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="mb-0 text-blue font-italic"><span className="mr-1">$</span>{price}</h5>
                    </div>
                </div>
            </ProductWrapper>    
        )
    }
}

Product.propTypes={
product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    inCart:PropTypes.bool,
    price:PropTypes.number
}).isRequired
}


const ProductWrapper=Styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    transition:all 1s linear;
    border-top:transparent;
}
&:hover{
    .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px rgba(0,0,0,0.2); 
}
.card-footer{
    background:rgba(247,247,247);
}
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
transform:scale(1.2);
}
.cart-btn{
 position:absolute;
 bottom:0;
 right:0;
 padding :0.2rem 0.4rem;
 background:var(--lightBlue);
 border:none;
 color:var(--mainWhite);
 font-size:1.4rem;
 border-radius:0.5rem 0 0 0;
 transform:translate(100%,100%);
 transition:all 1s linear;   
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`;

