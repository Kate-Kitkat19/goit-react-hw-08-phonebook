import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filtersSlice';
import { Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleUpdate(evt) {
    const query = evt.target.value;
    dispatch(updateFilter(query));
  }

  return (
    <Input
      marginTop={4}
      placeholder="Find contact by name"
      type="text"
      name="filter"
      width="auto"
      onChange={handleUpdate}
      borderColor="gray.300"
    />
  );
};
