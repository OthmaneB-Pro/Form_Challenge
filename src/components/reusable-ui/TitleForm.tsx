import styled from "styled-components";

type TitleFormType = {
    label : string;
}

export default function TitleForm({label} : TitleFormType) {
  return <TitleFormStyled>{label}</TitleFormStyled>;
}

const TitleFormStyled = styled.h1`
  margin-top: 40px;
  font-size: 40px;
  font-weight: bold;
`;
