import React from 'react';
import ResultsEntry from '../ResultsEntry';
import './ResultsBar.css';

class ResultsBar extends React.Component {
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
        <div className="row resultsScreen">
            <div className="col"></div>
            <div className="col-6">
                <h1>RESULT SCREEN</h1>
                <ResultsEntry />
            </div>
            <div className="col"></div>
        </div>
        );
    }
}

export default ResultsBar;