import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraphs: 5
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({paragraphs: event.target.value})
    }

    render() {
        return(
            <div id='dummy-container'>
                <h1>Bacon Text Generator</h1>
                <div id='dummy-text-result'></div>
                <div id='dummy-text-controls'>
                    <h2> Options</h2>
                    <p>
                        Paragraphs:
                    </p>
                    <p>
                        <input type='number' value={this.state.paragraphs}
                               onChange={this.handleChange} />
                    </p>
                </div>
            </div>
        )
    }
}
