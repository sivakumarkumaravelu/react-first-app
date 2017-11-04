
import React, {Component} from "react";
import PropTypes from "prop-types";

 export default class CartSummary extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('Summary next props', nextProps);
    //     console.log('Summary current props', this.props);
    // }

    applyDiscount() {
        this.setState({
            discount: !this.state.discount
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Summary: shouldComponentUpdate");
        if (this.props.count != nextProps.count || this.props.amount != nextProps.amount){
            return true;// this should call render
        }
        return false;
    }
 
    render() {
        console.log("CartSummary render");
        
        return (
            <div> 
            
            <h2>Total Items {this.props.count}</h2>
            <h2>Amount  {this.props.amount}</h2>
            </div>
        )
    }
} 

 