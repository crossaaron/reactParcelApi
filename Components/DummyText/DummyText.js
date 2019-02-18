import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            paragraphs: 3,
            results: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchText();
    }

    fetchText() {
        this.setState({isLoading: true});

        const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paragraphs
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    results: json,
                    isLoading: false
                })
            });
    }

    handleChange(event) {
        this.setState({paragraphs: event.target.value}, () => {
            this.fetchText();
        });
    }

    // displayResults() {
    //     if (this.state.isLoading) {
    //         return <p>Loading...</p>
    //     } else {
    //         return this.state.results.map((paragraphText, index) => {
    //             return <p key={index}>{paragraphText}</p>
    //         })
    //     }
    //
    // }

    render() {
        return(
            <div id='dummy-container'>
                <h1>Bacon Text Generator</h1>
                <div id='dummy-text-controls'>
                    <h2> Options</h2>
                    <p>
                        Paragraphs:
                    </p>
                    <p>
                        <input type='number' value={this.state.paragraphs}
                               min='1'
                               onChange={this.handleChange} />
                    </p>
                </div>
                <div id='dummy-text-result'></div>
                    {/*ternary operator to replace if/else above!!!!!*/}
                    {
                        this.state.isLoading ? <p>Loading...</p>
                        : this.state.results.map((paragraphText, index) => {
                            return <p key={index}>{paragraphText}</p>
                    })

                    }
            </div>
        )
    }
}
