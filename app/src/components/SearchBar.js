import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.filterText}
          onChange={this.handleSearchTextChange}
          className="s-text7 size6 p-l-23 p-r-50" name="search-product" placeholder="Search Products..."
        />
      </form>
    );
  }
}

export default SearchBar;