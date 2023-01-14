import { ContactCard } from '../ContactCard/ContactCard';
import { List, ListItem } from './Contacts.styled';
import { selectContacts, selectFilter } from 'redux/selectors';
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
      {visibleContacts.map(({ name, phone, id }) => {
        return (
          <ListItem key={id}>
            <ContactCard name={name} phone={phone} id={id} />
          </ListItem>
        );
      })}
    </List>
  );
};
