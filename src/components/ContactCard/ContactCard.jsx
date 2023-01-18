import { PropTypes } from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, Text, HStack, Box } from '@chakra-ui/react';

export const ContactCard = ({ name, number, id }) => {
  const dispatch = useDispatch();
  function deleteItem(id) {
    dispatch(deleteContact(id));
  }

  return (
    <Box spacing={2}>
      <HStack spacing={2}>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </HStack>
      <IconButton
        type="button"
        onClick={() => deleteItem(id)}
        icon={<DeleteIcon />}
      ></IconButton>
    </Box>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
