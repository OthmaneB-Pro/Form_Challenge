import styled from "styled-components";
import Form1 from "./Form1";
import Box from "../../reusable-ui/Box";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Box />
      <div className="container">
        <Form1 />
      </div>
      <Box />
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

  .container {
    width: 500px;
    height: 500px;
    background-color: #f6fbf9;
    border-radius: 50px;
    z-index: 3;
  }
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
  input {
    padding: 20px;
    width: 350px;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid;
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
