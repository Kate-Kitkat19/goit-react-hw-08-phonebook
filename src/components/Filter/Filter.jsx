import { StyledFilter, StyledLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleUpdate(evt) {
    const query = evt.target.value;
    dispatch(updateFilter(query));
  }

  return (
    <StyledLabel>
      Find contact by name
      <StyledFilter
        type="text"
        name="filter"
        onChange={handleUpdate}
      ></StyledFilter>
    </StyledLabel>
  );
};
