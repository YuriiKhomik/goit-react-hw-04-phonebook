import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={value} onChange={onChange}></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
