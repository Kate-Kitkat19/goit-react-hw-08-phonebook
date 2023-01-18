import { ContactCard } from '../ContactCard/ContactCard';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Container, VStack } from '@chakra-ui/react';

export const Contacts = () => {
  const contactList = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = filter
    ? contactList.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contactList;

  return (
    <Container marginTop={4} centerContent maxW="xl" as="ul">
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <VStack width="full" as="li" key={id}>
            <ContactCard name={name} number={number} id={id} />
          </VStack>
        );
      })}
    </Container>
  );
};
