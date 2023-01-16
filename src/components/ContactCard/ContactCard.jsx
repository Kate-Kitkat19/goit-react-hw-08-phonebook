import { PropTypes } from 'prop-types';
import { Card, Button, Text, Wrapper } from './ContactCard.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { DeleteIcon } from '@chakra-ui/icons';

export const ContactCard = ({ name, number, id }) => {
  const dispatch = useDispatch();

  function deleteItem(id) {
    dispatch(deleteContact(id)).then(toast.success('Contact has been deleted'));
  }

  return (
    <Card>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </Wrapper>
      <Button type="button" onClick={() => deleteItem(id)}>
        Delete contact <DeleteIcon />
      </Button>
    </Card>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
