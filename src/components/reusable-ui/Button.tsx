import styled from "styled-components";

type ButtonType = {
  label: string;
};

export default function Button({ label }: ButtonType) {
  return <ButtonStyled>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  margin-top: 30px;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  background: #84c7ae;
  color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    transition: linear 0.2s;
    background: #4eb791;
  }
`;
