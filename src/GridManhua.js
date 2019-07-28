import React from 'react';
import axios from 'axios';

class GridManhua extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manhuas: []
        };
        this.getAllManhua();
    }

    handleChapterChange(id, actualValue){

    }

    getAllManhua() {
        axios.get('https://localhost:44348/api/manhua/', {
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
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Chapter</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.manhuas.length > 0 ?
                                this.state.manhuas.map(manhua =>
                                    <tr key={manhua.id}>
                                        <td>{manhua.name}</td>
                                        <td><input type="number" value={manhua.chapter} onChange={this.handleChapterChange} /></td>
                                    </tr>) :
                                null
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GridManhua