import { nanoid } from 'nanoid';
import { FilterContainer, Label } from './FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const FilterContacts = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  const idForFilterInput = nanoid();

  return (
    <FilterContainer>
      <Label htmlFor={idForFilterInput}>Find contacts by name</Label>
      <input
        id={idForFilterInput}
        type="text"
        value={filter}
        onChange={changeInput}
      />
    </FilterContainer>
  );
};
