import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleForm from "../../../reusable-ui/TitleForm";
import TextForm1 from "./TextForm1";
import Button from "../../../reusable-ui/Button";

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
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <Button label="Create Account" />
    </Formulaire1Styled>
  );
}

const Formulaire1Styled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    padding: 20px;
    width: 350px;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid;
  }
`;
