import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TitleForm from "../../../reusable-ui/TitleForm";
import { schema } from "./yupSchema";
import { IFormInputs } from "./typeFormInputs";
import InputWithYup from "../../../reusable-ui/InputWithYup";
import Button from "../../../reusable-ui/Button";
import ErrorText from "../../../reusable-ui/ErrorText";

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
        {errors.email && <ErrorText errors={errors} fieldName="email" />}

        <InputWithYup
          name="username"
          type="text"
          placeholder="Entrez votre nom d'utilisateur"
          register={register}
        />
        {errors.username && <ErrorText errors={errors} fieldName="username" />}

        <InputWithYup
          name="password"
          type="password"
          placeholder="Entrez votre mot de passe"
          register={register}
        />
        {errors.password && <ErrorText errors={errors} fieldName="password" />}

        <InputWithYup
          name="confirmPassword"
          type="password"
          placeholder="Confirmez votre mot de passe"
          register={register}
        />
        {errors.confirmPassword && (
          <ErrorText errors={errors} fieldName="confirmPassword" />
        )}

        <Button label="S'inscrire" disabled={isSubmitting} />
      </FormStyled>
    </FormContainerStyled>
  );
}

const FormStyled = styled.form`
  background: #6bcb77;
  padding: 25px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  button {
    background: #04aa6d;
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
  background: #2d6a4f;
  height: 100vh;
`;
