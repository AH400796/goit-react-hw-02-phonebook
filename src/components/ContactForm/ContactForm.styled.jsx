import styled from 'styled-components';

export const AddingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  margin-bottom: 30px;
  padding: 20px;

  background-color: #d6dbf7;
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 5px;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  max-width: 300px;
  outline: transparent;
  padding: 5px 10px;
  font-size: 16px;

  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 6px #3d3d3d;
`;

export const Button = styled.button`
  display: block;
  font-size: 16px;
  width: 150px;
  border: 1px solid #bfbacc;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #8ed9fc;
  cursor: pointer;
  box-shadow: 2px 3px 5px #3d3d3d;

  &:hover,
  &:focus {
    background-color: #684dc9;
    color: #ffffff;
  }

  &:disabled {
    background-color: #ffffff;
    color: #bdbdbd;
    cursor: auto;
  }
`;
