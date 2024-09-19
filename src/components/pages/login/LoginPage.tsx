import styled from "styled-components";
import Form1 from "./form1/Form1";
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
`;
