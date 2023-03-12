import PropTypes from 'prop-types';

export const Filter = ({ filterContacts }) => {
  const filterChange = e => {
    const filterValue = e.target.value.toLowerCase().trim();
    filterContacts(filterValue);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={filterChange} />
    </div>
  );
};

Filter.propTypes = { filterContacts: PropTypes.func };
