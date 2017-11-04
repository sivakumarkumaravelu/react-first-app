import React, {Component} from "react";

export default class About extends Component {

    constructor() {
        super();
        this.state = {
            members: ['Member 1', 'Member 2'],
            showList: true
        }
    }

    addMember() {
        console.log('add member');
        this.state.members.push('Member ' + ( this.state.members.length + 1 ) );
        this.setState({
            members: this.state.members
        });
    }

    toggleVisibility() {
        this.state.visible = !this.state.visible;
        this.setState({
            showList: !this.state.showList
        });
    }

    render(){
        return (
            <div>
                <h2>About info</h2>

                <button onClick={() => this.addMember()}>Add</button>

                <button onClick={() => this.toggleVisibility()}>Show/Hide</button>

                {
                    this.state.showList && 
                    
                    <ul>
                        {
                            this.state.members.map( (member, index) => (
                                <li key={ index } >{ member }</li>
                            ))
                        }
                    </ul>
                }
            </div>   
        )
    }
}