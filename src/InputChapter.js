import React from 'react';
import axios from 'axios';

class GridManhua extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id = '',
            chpater = 0
        };
        this.handleChapterChange = this.handleChapterChange.bind(this);
    }

    handleChapterChange(event) {        
        let chapter = event.target.value;

        axios.put('https://localhost:44348/api/manhua/UpdateChapter', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data);
            this.setState({ manhuas: response.data });
        }).catch((error) => {
            console.log(error);
        });

    }

    render() {
        return (
            <input type="number" value={this.props.chapter} onChange={this.handleChapterChange} />
        );
    }
}

export default GridManhua