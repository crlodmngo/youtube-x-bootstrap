import React from 'react';

class SearchBar extends React.Component{
    state = {searchValue: ''};
    onInputSubmit = e =>{
        this.setState({searchValue: e.target.value});
    };

    onFormSubmit = e =>{
        e.preventDefault();

        this.props.onFormSubmit(this.state.searchValue);
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <div className="input-group">
                        <input className="form-control" 
                            value={this.state.searchValue}
                            onChange={this.onInputSubmit}
                        />
                        <div className="input-group-append">
                            <button button="submit" className="btn btn-primary btn-sm">
                            <svg className="w-6 h-6" fill="none" style={{height:"20px"}} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
           
        );
    }
}

export default SearchBar;