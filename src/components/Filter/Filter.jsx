import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        required
      />
    </Label>
  );
};
