import React from 'react';
import './SavedBar.css';

class SavedBar extends React.Component {
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
        <div className="row savedScreen">
            <div className="col"></div>
            <div className="col-6">
                <h1>SAVED SCREEN</h1>
                <div className="post">Post <button type="button" className="btn btn-success">REMOVE</button></div>
                <div className="entry">Entry <button  type="button" className="btn btn-success">REMOVE</button></div>
                <div className="summary">Summary <button  type="button" className="btn btn-success">REMOVE</button></div>
            </div>
            <div className="col"></div>
        </div>
        );
    }
}

export default SavedBar;