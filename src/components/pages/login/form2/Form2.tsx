import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TitleForm from "../../../reusable-ui/TitleForm";
import { schema } from "./yupSchema";
import { IFormInputs } from "./typeFormInputs";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const { username } = useParams();
  const navigate  = useNavigate()

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    navigate('/form3')
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <TitleForm label={`Hey, ${username}`} />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register("email")}
        placeholder="Entrez votre email"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label htmlFor="username">Nom d'utilisateur</label>
      <input
        id="username"
        type="text"
        {...register("username")}
        placeholder="Entrez votre nom d'utilisateur"
      />
      {errors.username && <p className="error">{errors.username.message}</p>}

      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        {...register("password")}
        placeholder="Entrez votre mot de passe"
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
      <input
        id="confirmPassword"
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirmez votre mot de passe"
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}

      <button type="submit" disabled={isSubmitting}>
        S'inscrire
      </button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-bottom: 15px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
