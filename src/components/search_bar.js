//has to import React library because compling JSX to JS needs to use functions
// in React
import React, { Component } from 'react';

// search bar class 
class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }



    render() {
        return (
        <div className="search-bar">
            <input 
                value={ this.state.term } 
                onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }

    onInputChange(term) {
         this.setState({ term: event.target.value });
         this.props.onSearchTermChange(term);
    }
}

export default SearchBar; 