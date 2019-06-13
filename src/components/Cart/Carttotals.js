import React from 'react';
import {Link} from 'react-router-dom';
import Paypalbutton from './Paypalbutton';

export default function Carttotals({value,history}){
    const {cartsubtotal,carttotal,carttax,clearcart}=value;

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>{clearcart()}}>clear cart</button>
                        </Link>
                        <h5>    
                            <span className="text-title">sub total :</span>
                            <strong>$ {cartsubtotal}</strong>
                        </h5>
                        <h5>    
                            <span className="text-title">tax :</span>
                            <strong>$ {carttax}</strong>
                        </h5>
                        <h5>    
                            <span className="text-title">total :</span>
                            <strong>$ {carttotal}</strong>
                        </h5>
                        <Paypalbutton total={carttotal} history={history} clearcart={clearcart}/>    
                    </div>
                </div>
                    
            </div>
        </React.Fragment>
    )
}