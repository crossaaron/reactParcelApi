import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraphs: 3,
            results: []
        };

        this.handleChange = this.handleChange.bind(this);

        const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paragraphs
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(JSON.stringify(json));
                this.setState({results: json})
            });
    }

    handleChange(event) {
        this.setState({paragraphs: event.target.value})
    }

    render() {
        return(
            <div id='dummy-container'>
                <h1>Bacon Text Generator</h1>
                <div id='dummy-text-result'></div>
                    {this.state.results.map((paragraphText, index) => {
                        return <p key={index}>{paragraphText}</p>
                    })}
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
