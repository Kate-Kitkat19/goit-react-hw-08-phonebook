import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './Contacts/Contacts.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactList = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm></ContactForm>
      <Filter></Filter>
      {contactList.length > 0 && <Title>Contacts</Title>}
      {isLoading && !error && <b>Loading...</b>}
      <Contacts></Contacts>
    </Layout>
  );
};
