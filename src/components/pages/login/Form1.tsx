import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <h1>Create An Account</h1>
      <p>
        Create an account to enjoy all the services without any ads for free!
      </p>
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
      <button>Create Account</button>
    </Formulaire1Styled>
  );
}

const Formulaire1Styled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
