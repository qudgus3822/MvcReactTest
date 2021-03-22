
import React from 'react';
import ReactDOM from 'react-dom';

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name :null,
        }

        this.state.name = this.props.name;
    }

    Click() {
        
        this.setState({name:"bhkim"});
    }
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.state.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
                <button onClick={() => this.Click()} >test</button>
            </div>
        );
    }
}