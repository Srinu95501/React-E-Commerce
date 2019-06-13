import React,{Component} from 'react';
import {storeProducts,detailProduct} from './data';

const Productcontext = React.createContext();
class ProductProvider extends Component{
   
        state={
        products:JSON.parse(JSON.stringify(storeProducts)),
        detailProduct:detailProduct,
        cart:[],
        modalopen:false,
        modalproduct:detailProduct,
        cartsubtotal:0,
        carttax:0,
        carttotal:0
        }
        // componentDidMount(){
        //     this.setProducts();
        // }
        // setProducts = ()=>{
        //     let TmpProducts=[];
        //     storeProducts.forEach(item=>{
        //         const singleitem = {...item};
        //         TmpProducts = [...TmpProducts,singleitem];
        //     });
        //     this.setState(()=>{
        //         return {products:TmpProducts};
        //     });
        // };
        
        getItem = (id)=>{
            const product = this.state.products.find(item => item.id===id)
            return product; 
        }

        handledetail=(id)=>{
            const product = this.getItem(id);
            this.setState({
                detailProduct:product
            })
        }
        handleaddtocart=(id)=>{
            const tempproducts = [...this.state.products];
            const index = tempproducts.indexOf(this.getItem(id));    
            const product = tempproducts[index];
            product.inCart=true;
            product.count=1;
            const price = product.price;
            product.total = price;
            this.setState(()=>{
            return {products:tempproducts,cart:[...this.state.cart,product]}  }
            ,()=>{this.addtotals()});

        }
        openModal=(id)=>{                
            const product = this.getItem(id);
            this.setState(()=>{
                return {
                    modalproduct:product,modalopen:true
                }
            })
        }
        closeModal =()=>{
            this.setState(()=>{
                return {
                    modalopen:false
                }
            })
        }
        increment =(id)=>{
            const tempcart = [...this.state.cart];
            const selectedproduct = tempcart.find((item)=>item.id==id);

            const index = tempcart.indexOf(selectedproduct);
            const product = tempcart[index];

            product.count=product.count+1;
            product.total = product.count * product.price

            this.setState(()=>{
                return {
                    cart:[...tempcart]
                }
            },()=>{this.addtotals()})
        }
        decrement =(id)=>{
            const tempcart = [...this.state.cart];
            const selectedproduct = tempcart.find((item)=>item.id==id);

            const index = tempcart.indexOf(selectedproduct);
            const product = tempcart[index];

            product.count=product.count-1;
            if(product.count==0){
                this.removeitem(id);
            }
            else{
            product.total = product.count * product.price

            this.setState(()=>{
                return {
                    cart:[...tempcart]
                }
            },()=>{this.addtotals()})
        }
        }
        removeitem =(id)=>{
            let tempproducts = [...this.state.products];
            let tempcart = [...this.state.cart];

            tempcart = tempcart.filter((item)=>item.id!=id);
            let index = tempproducts.indexOf(this.getItem(id));
            let removedproduct =  tempproducts[index];
            removedproduct.inCart=false;
            removedproduct.count=0;
            removedproduct.total=0;

            this.setState(()=>{ 
                return {
                    cart:[...tempcart],
                    products:[...tempproducts]
                }
            },()=>{this.addtotals()})
        }
        clearcart =()=>{
            this.setState(()=>{
                return {
                    cart:[],
                    products:JSON.parse(JSON.stringify(storeProducts))
                }    
            },
            ()=>{
                this.addtotals();
            }
            )
        }
        addtotals=()=>{
            let subtotal=0;
            this.state.cart.map(item=>(subtotal+=item.total));
            const temptax=subtotal*0.1;
            // const tax = parseFloat(temptax).toFixed(2);
            const total = subtotal+temptax;
            this.setState(()=>{
                return {
                    cartsubtotal:subtotal,
                    carttax:temptax,
                    carttotal:total
            }
            })
        }

    // tester=()=>{
    //     console.log("state products:",this.state.products[0].inCart);
    //     console.log("Data products :",storeProducts[0].inCart);
        
    //     const tempProducts = [...this.state.products];
    //     tempProducts[0].inCart = true;
    //     this.setState(
    //         ()=>{
    //             return {products :tempProducts};
    //         },
    //         ()=>{
    //             console.log("state products:",this.state.products[0].inCart);
    //     console.log("Data products :",storeProducts[0].inCart);
        
    //         }
    //     )
    // } 
    render(){
        return(
            <Productcontext.Provider value={
                {...this.state,
                handledetail:this.handledetail,
                handleaddtocart:this.handleaddtocart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeitem:this.removeitem,
                clearcart:this.clearcart
                }}>
                {this.props.children}
            {/* <button onClick={this.tester}>testme</button> */}
            </Productcontext.Provider>    
        )
    }
}

const ProductConsumer = Productcontext.Consumer;

export {ProductProvider,ProductConsumer};