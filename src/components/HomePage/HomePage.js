import ContactForm from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import { selectContacts } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Heading } from '@chakra-ui/react';
const HomePage = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm></ContactForm>
      <Filter></Filter>
      {contactList.length > 0 && (
        <Heading
          marginTop={4}
          fontWeight="bold"
          fontFamily="'Crimson Text', serif"
        >
          Contacts
        </Heading>
      )}

      <Contacts></Contacts>
    </>
  );
};

export default HomePage;
