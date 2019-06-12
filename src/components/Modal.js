// import React,{Component} from 'react';
// import Styled from 'styled-components'; 

// export default class Modal extends Component{
//    render(){
//        return (
//            <Modalcomponent>
//                <h5 id="x">Item added to the Cart</h5>
//            </Modalcomponent>
//        )
//    } 
// }

// const Modalcomponent = Styled.div`
// position:fixed;
// top:0;
// bottom:0;
// left:0;
// right:0;
// background:rgba(0,0,0,0.3);
// display:flex;
// align-items:center;
// justify-content:center;
// #x{
//     background:var(--mainWhite);
// }
// `


import React,{Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Buttoncontainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render(){
        return (
            <ProductConsumer>
            {(value)=>{
                const {modalopen,closeModal}=value;
                const {img,title,price} = value.modalproduct
                if(!modalopen){
                    return null;
                }
                else{
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                <div id="modal" className="p-3 text-capitalize col-8 col-md-6 col-lg-4 mx-auto text-center">
                                    <h5>item added to the cart  </h5>    
                                <img src={img} classsName="img-fluid" alt="product image"/>
                                <h5>{title}</h5>
                                <h5 className="text-muted">price : $ {price}</h5>
                                <Link to="/">
                                    <Buttoncontainer onClick={()=>closeModal()}>
                                        continue shopping
                                    </Buttoncontainer>
                                </Link>
                                <Link to="/cart">
                                    <Buttoncontainer cart onClick={()=>closeModal()}>
                                        go to cart
                                    </Buttoncontainer>
                                </Link>    
                                </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
                }

            }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite)
}
`
