import { PropTypes } from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton, Text, HStack, Spacer } from '@chakra-ui/react';
import { useState } from 'react';

export const ContactCard = ({ name, number, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  function deleteItem(id) {
    setIsLoading(true);
    dispatch(deleteContact(id));
  }

  return (
    <HStack
      spacing={2}
      width={['16rem', '20rem']}
      flexDirection="row"
      justifyContent="space-between"
      marginBottom={2}
    >
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Spacer></Spacer>
      <IconButton
        isLoading={isLoading}
        type="button"
        onClick={() => deleteItem(id)}
        icon={<DeleteIcon />}
        size="sm"
      ></IconButton>
    </HStack>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
