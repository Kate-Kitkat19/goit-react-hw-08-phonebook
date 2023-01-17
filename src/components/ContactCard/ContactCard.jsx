import { PropTypes } from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';


import { DeleteIcon } from '@chakra-ui/icons';

export const ContactCard = ({ name, number, id }) => {
  const dispatch = useDispatch();
  function deleteItem(id) {
    dispatch(deleteContact(id))
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button type="button" onClick={() => deleteItem(id)}>
        Delete contact <DeleteIcon />
      </button>
    </div>
  );
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
