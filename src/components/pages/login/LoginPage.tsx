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
      <div className="box" />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Create An Account</h1>
          <p>
            Create an account to enjoy all the services without any ads for
            free!
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
        </form>
      </div>
      <div className="box" />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background: #a7d7c5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  h1 {
    margin-top: 40px;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    width: 350px;
    text-align: center;
    margin-bottom: 20px;
  }
  .container {
    width: 500px;
    height: 500px;
    background-color: #f6fbf9;
    border-radius: 50px;
    z-index: 3;
  }
  .box{
    width: 550px;
    height: 550px;
    background: #C1E3D6;
    border-radius: 120px;
    transform: rotate(45deg);
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 20px;
    width: 350px;
    margin-top: 20px;
    border-radius: 15px;
  }
  button {
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
  }
`;
