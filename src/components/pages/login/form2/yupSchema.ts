import * as yup from "yup";

export const schema = yup.object().shape({
    email: yup
      .string()
      .email("L'adresse e-mail n'est pas valide")
      .required("L'e-mail est requis"),
    username: yup
      .string()
      .min(3, "Le nom d’utilisateur doit contenir au moins 3 caractères")
      .max(20, "Le nom d’utilisateur ne doit pas dépasser 20 caractères")
      .required("Le nom d’utilisateur est requis"),
    password: yup
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .required("Le mot de passe est requis"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Les mots de passe doivent correspondre")
      .required("Veuillez confirmer votre mot de passe"),
  });
