import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import GridManhua from './GridManhua';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            chapter: 0,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleChapterChange = this.handleChapterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleChapterChange(event) {
        this.setState({ chapter: event.target.value });
    }

    handleSubmit(event) {
        axios.post('https://localhost:44348/api/manhua/add',
            this.state,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Manhua name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Chapter:
                        <input type="number" value={this.state.chapter} onChange={this.handleChapterChange} />
                    </label>
                    <input type="submit" value="Save" />
                </form>                                
                <GridManhua />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);