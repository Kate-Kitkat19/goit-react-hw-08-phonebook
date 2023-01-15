import { ContactCard } from '../ContactCard/ContactCard';
import { List, ListItem } from './Contacts.styled';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contactList = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = filter
    ? contactList.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contactList;

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <ContactCard name={name} number={number} id={id} />
          </ListItem>
        );
      })}
    </List>
  );
};
