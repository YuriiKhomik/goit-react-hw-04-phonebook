import PropTypes from 'prop-types';
import { List, Contact } from './styled';
import { Box } from 'components/Box';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Box display="flex" alignItems="center">
              <Contact>
                {name}: {number}
              </Contact>
              <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </button>
            </Box>
          </li>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
