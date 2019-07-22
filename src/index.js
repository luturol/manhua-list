import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

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
        console.log('Name submited = ' + this.state.name);
        console.log('Chapter = ' + this.state.chapter);
        debugger;
        axios.post('https://localhost:44348/api/manhua/add',
            {
                params: {
                    name: this.state.name,
                    chapter: this.state.chapter
                }
            }, {
                headers: {
                    //'Access-Control-Allow-Origin': 'https://localhost:3000/',
                    //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response.data);
            }
        );        
        event.preventDefault();
    }
    
    getAllManhua(){
        axios.get('https://localhost:44348/api/manhua/',{
                headers: {
                    //'Access-Control-Allow-Origin': 'https://localhost:3000/',
                    //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response.data);
            }
        );
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
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);