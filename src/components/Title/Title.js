import React from 'react';
import './Title.css';

class Title extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
        <div className="row titleBar">
            <div className="col"></div>
            <div className="col-6">
                <div className="title">NY TIMES NEW SEARCH BOT</div>
                <div className="subtitle">Getting the news so you don't have to</div>
            </div>
            <div className="col"></div>
        </div>
        );
    }
}

export default Title;