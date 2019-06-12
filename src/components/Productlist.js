import React , {Component} from 'react'
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context';

export default class Productlist extends Component{
    render(){
        
        return (
           <React.Fragment>
               <Title name="our" title="products"/>
           <div className="row">
            <ProductConsumer>
                {(val)=>{
                return val.products.map((product)=>{
                return <Product key={product.id} product={product}/>}
                )}}
            </ProductConsumer> 
            </div>   
            </React.Fragment>
            
            
              
        )
    }
}