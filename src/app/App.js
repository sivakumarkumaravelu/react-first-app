import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';

export class App extends Component {
    contact(){
        console.log('called by child')
    }

    render() {
        return (
            <div>
                <Header title='My First React App'></Header>
                <Home></Home>
                <About></About>
                <Footer year={2017} contact={() => this.contact()}></Footer>
            </div>        
        )
    }
}