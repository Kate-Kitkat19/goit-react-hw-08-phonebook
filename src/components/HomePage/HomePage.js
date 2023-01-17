import ContactForm from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm></ContactForm>
      <Filter></Filter>
      {contactList.length > 0 && <h2>Contacts</h2>}
      {isLoading && !error && <b>Loading...</b>}
      <Contacts></Contacts>
    </>
  );
};

export default HomePage;
