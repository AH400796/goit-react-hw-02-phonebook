import React from 'react';
import { InputLabel, FilterInput } from './Filter.styled';

export default function Filter({ filter, onChange }) {
  return (
    <InputLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </InputLabel>
  );
}
