import React from 'react';
import axios from 'axios';

class InputChapter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            chapter: 0,
        };                
        this.handleChapterChange = this.handleChapterChange.bind(this);
    }

    handleChapterChange(event) {        
        let  id = this.props.id;
        let chapter = event.target.value;                
        axios.post('https://localhost:44348/api/manhua/updateChapter',
            {
                id: id,
                chapter: chapter
            },
            {
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

export default InputChapter