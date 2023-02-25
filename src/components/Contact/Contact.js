import { ContactItem, ContactInfo, RemoveContBtn } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <RemoveContBtn onClick={() => dispatch(removeContact(id))}>
        Delete
      </RemoveContBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
