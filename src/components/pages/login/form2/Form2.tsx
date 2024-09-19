import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TitleForm from "../../../reusable-ui/TitleForm";
import { schema } from "./yupSchema";
import { IFormInputs } from "./typeFormInputs";
import InputWithYup from "../../../reusable-ui/InputWithYup";
import Button from "../../../reusable-ui/Button";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const { username } = useParams();
  const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    navigate("/form3");
  };

  return (
    <FormContainerStyled>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <TitleForm label={`Hey, ${username}`} />
        <InputWithYup
          name="email"
          type="email"
          placeholder="Entrez votre email"
          register={register}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <InputWithYup
          name="username"
          type="text"
          placeholder="Entrez votre nom d'utilisateur"
          register={register}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <InputWithYup
          name="password"
          type="password"
          placeholder="Entrez votre mot de passe"
          register={register}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <InputWithYup
          name="confirmPassword"
          type="password"
          placeholder="Confirmez votre mot de passe"
          register={register}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}

        <Button label="S'inscrire" disabled={isSubmitting} />
      </FormStyled>
    </FormContainerStyled>
  );
}

const FormStyled = styled.form`
  background: #6BCB77;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  .error {
    color: red;
    font-size: 14px;
  }
  button {
    background: #04AA6D;
    border: 1px solid;
    width: 350px;

    &:hover {
      background: #056136;
    }
  }
`;

const FormContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2D6A4F;
  height: 100vh;
`;
