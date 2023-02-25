import { Container } from './App.styled';
import { ContactsList } from 'components/ContactsList';
import { ContactForm } from 'components/ContactForm';
import { FilterContacts } from 'components/FilterContacts';

export const App = () => (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <FilterContacts />
    <ContactsList />
  </Container>
);
