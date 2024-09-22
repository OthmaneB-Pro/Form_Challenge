import styled from "styled-components";

type SubmitButtonType = {
    label : string
}

export default function SubmitButton({label} : SubmitButtonType) {
  return (
    <SubmitButtonStyled>{label}</SubmitButtonStyled>
)
}

const SubmitButtonStyled = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;