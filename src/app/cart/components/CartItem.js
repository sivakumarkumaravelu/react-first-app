
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        console.log("Cart Item Created");

        this.state = {
             qty: props.item.qty
        }
    }
    
    componentWillMount() {
        console.log("cart item will mount");
        
    }

    componentDidMount() {
        console.log("cart item did mount");
        this.inputElement.focus();
    }

    componentWillUnmount() {
        console.log("cart item will unmount");
    }
 
    handleChange(e) {
        let value = e.target.value;

        this.setState({
            qty: value
        });
    }

    render() {
        
        //let item = this.props.item
        let {item} = this.props;

         console.log("CartItem render ");
        

        return (
            <tr>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    <input value={this.state.qty} 
                        ref={(inputElement) => this.inputElement = inputElement}
                        onChange={(e) => this.handleChange(e)}
                    />
                </td>
                <td>
                    {item.price * item.qty}
                </td>
                <td>
                   <button>Update</button>
                </td>     
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}
