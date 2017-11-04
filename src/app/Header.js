import React, {Component} from "react";

import {NavLink} from 'react-router-dom';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>

                <NavLink to="/" exact className="button" activeClassName="success">Home</NavLink> &nbsp;
                <NavLink to="/cart" className="button" activeClassName="success">Cart</NavLink> &nbsp;
                <NavLink to="/products" className="button" activeClassName="success">Products</NavLink> &nbsp;
                <NavLink to="/about" className="button" activeClassName="success">About</NavLink>
            </div>   
        )
    }
}