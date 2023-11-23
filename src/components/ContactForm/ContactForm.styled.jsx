import { styled } from 'styled-components';

export const Form = styled.form`
  width: 500px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
export const Label = styled.label`
  font-size: 15;

  &:hover,
  &:focus-within {
    color: #4caf50;
  }
`;
export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 20px;

  border-radius: 10px;
  position: relative;

  &:invalid + span:after {
    position: absolute;
    content: '✖';
    padding-left: 5px;
    color: #8b0000;
  }

  &:valid + span:after {
    position: absolute;
    content: '✓';
    padding-left: 5px;
    color: #009000;
  }

  &:hover,
  &:focus {
    border: 2px solid #4caf50;
    outline: none;
  }
`;

export const AddContact = styled.button`
  background-color: #f2fcf5;
  color: black;
  border: 2px solid #4caf50;

  &:hover,
  &:focus {
    background-color: #4caf50;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    outline: none;
  }
`;
