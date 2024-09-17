import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleForm from "../../../reusable-ui/TitleForm";
import TextForm1 from "./TextForm1";
import Button from "../../../reusable-ui/Button";
import { inputForm } from "./inputForm";
import InputValue from "../../../reusable-ui/InputValue";

export default function Form1() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/form2/${user.name}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
    <Formulaire1Styled onSubmit={handleSubmit}>
      <TitleForm label="Create An Account" />
      <TextForm1 />
      {inputForm.map((input) => (
        <InputValue
          {...input}
          value={user[input.name as keyof typeof user]}
          onChange={handleChange}
        />
      ))}
      <Button label="Create Account" />
    </Formulaire1Styled>
  );
}

const Formulaire1Styled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
