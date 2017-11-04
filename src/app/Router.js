import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import {App} from './App';

import Home from './Home';
import About from './About';
import Cart from './cart/components/Cart';
import ProductList from './ProductList';

export default function Router(){
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/products" component={ProductList} />

                    <Redirect path="*" to="/" />
                </Switch>
            </App>    
        </BrowserRouter>
    )
}