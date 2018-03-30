import React from 'react';
// import API from "../../utils/API";
import './SearchBar.css';


class SearchBar extends React.Component {
    state = {
        articles: [],
        term: "",
        syear: "",
        eyear: ""
    };

    componentDidMount () {
    
    }
    
    searchArticles=()=>{
        let currentState = this.state.articles
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=a69e1cdbb16b4f23841c8f01be77f31a`)
        .then((res) => res.json())
        .then((json) => this.setState({articles: [...currentState, json.response.docs]}))
      }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArticles(this.state.term);
        console.log(this.state.term);
        console.log(this.state.syear);
        console.log(this.state.eyear);
    }

    render() {
        return (
        <div className="row searchScreen">
            <div className="col"></div>
            <div className="col-6">
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Search News:
                        <input name="term" value={this.state.term} onChange={this.handleInputChange} />
                        <input name="syear"  value={this.state.syear} onChange={this.handleInputChange} />
                        <input name="eyear"  value={this.state.eyear} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="col">
            </div>
        </div>
        );
    }
}

export default SearchBar;