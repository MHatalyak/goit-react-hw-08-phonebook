import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './contactSlice';
import { FilterContainer, FilterLabel, FilterInput } from '../App.styled';
import { filterSelector } from './contactSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>Filter contacts by name:</FilterLabel>
      <FilterInput type="text" value={filter} onChange={handleFilterChange} />
    </FilterContainer>
  );
};

export default Filter;
