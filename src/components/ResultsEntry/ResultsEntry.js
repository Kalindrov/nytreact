import React from 'react';
import './ResultsEntry.css';

class ResultsEntry extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    render() {
        return (
        <div className="row resultsScreen">
            <div className="col"></div>
            <div className="col-6">
                <div className="post">POST <button type="button" className="btn btn-primary">SAVE</button></div>
            </div>
            <div className="col"></div>
        </div>
        );
    }
}

export default ResultsEntry;