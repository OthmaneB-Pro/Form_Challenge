import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginPage() {
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
    <LoginPageStyled>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Nom</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Nom"
          />
          <label>Mot de passe</label>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="mot de passe"
          />
          <button>Valider</button>
        </form>
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 400px;
    height: 400px;
    background-color: green;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 5px;
    margin-top: 10px;
  }
`;
