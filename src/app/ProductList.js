import React, {Component} from 'react';

import {fetchProducts} from './Service';


export default class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        
        fetchProducts()
            .then(products => {
                this.setState({
                    products,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    loading: false
                })
            })
    }

    render() {

        if (this.state.loading) {
            return (
                <h2>Products Loading...</h2>
            )
        }

        if (this.state.error) {
            return (
                <h2>Error while loading products!</h2>
            )
        }

        return (
            <ul>
                {
                    this.state.products.map( product => (
                        <li key={product.id}> {product.name} </li>
                    ))
                }
            </ul>  
        )
    }
}