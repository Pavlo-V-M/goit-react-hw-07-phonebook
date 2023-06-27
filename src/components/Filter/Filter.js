import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, setFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacs by name
      <input
        type="text"
        name="filter"
        title="Find contacs by name"
        value={filterValue}
        onChange={evt => dispatch(setFilterValue(evt.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
