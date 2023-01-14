import { PropTypes } from 'prop-types';
import { Card, Button, Text, Wrapper } from './ContactCard.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

export const ContactCard = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  function deleteItem(id) {
    dispatch(deleteContact(id));
  }

  return (
    <Card>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{phone}</Text>
      </Wrapper>
      <Button type="button" onClick={() => deleteItem(id)}>
        Delete contact
      </Button>
    </Card>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
