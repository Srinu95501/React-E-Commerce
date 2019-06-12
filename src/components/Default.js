import React , {Component} from 'react'

export default class Product extends Component{
    render(){
        console.log(this.props)
        return (
            <div className="container">
                <div className=".row">
                   <div className="col-10 mx-auto text-uppercase text-center text-title pt-5"> 
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>Page not found</h2>
                        <h2>The REQUESTED URL <span className="text-danger">{this.props.location.pathname}</span> WAS NOT FOUND </h2>
                    </div>
                </div>
            </div>    
        )
    }
}