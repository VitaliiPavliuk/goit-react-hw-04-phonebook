import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  filterChange = e => {
    const filterValue = e.target.value.toLowerCase().trim();
    this.props.filterContacts(filterValue);
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.filterChange} />
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = { filterContacts: PropTypes.func };
