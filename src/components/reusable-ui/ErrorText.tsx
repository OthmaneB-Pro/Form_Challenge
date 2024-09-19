import { FieldErrors } from "react-hook-form";
import { IFormInputs } from "../pages/login/form2/typeFormInputs";
import styled from "styled-components";

type ErrorTextProps = {
  errors: FieldErrors<IFormInputs>;
  fieldName: keyof IFormInputs;
};

export default function ErrorText({ errors, fieldName }: ErrorTextProps) {
  return <ErrorTextStyled>{errors[fieldName]?.message}</ErrorTextStyled>;
}

const ErrorTextStyled = styled.p`
  color: red;
  font-size: 14px;
`;
