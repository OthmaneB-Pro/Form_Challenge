import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ArticleType } from "./articleComponents/typeArticle";
import { EmptyArticle } from "./articleComponents/EmptyArticle";
import TitleForm from "../../reusable-ui/TitleForm";
import SubmitButton from "./articleComponents/SubmitButton";
import { inputValue } from "./articleComponents/inputValue";

export default function ArticlePage() {
  const { username } = useParams<{ username: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [myArticles, setMyArticles] = useState<ArticleType[]>([]);
  const [currentArticle, setCurrentArticle] =
    useState<ArticleType>(EmptyArticle);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleDelete = (articleId: string) => {
    setMyArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== articleId)
    );
  };

  const handleEdit = (articleId: string) => {
    const articleToEdit = myArticles.find(
      (article) => article.id === articleId
    );
    if (articleToEdit) {
      setCurrentArticle(articleToEdit);
      setIsEditing(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEditing) {
      setMyArticles((prevArticles) =>
        prevArticles.map((item) =>
          item.id === currentArticle.id ? currentArticle : item
        )
      );
      setIsEditing(false);
    } else {
      const newArticle = { ...currentArticle, id: crypto.randomUUID() };
      setMyArticles((prevArticles) => [...prevArticles, newArticle]);
    }

    setCurrentArticle(EmptyArticle);
  };

  return (
    <Container>
      <TitleForm label={`Vos Articles, ${username}`} />
      <Form onSubmit={handleSubmit}>

      {inputValue.map((inputV) => (
        <Input key={inputV.name}  name={inputV.name} onChange={handleChange} placeholder={inputV.placeholder} value={currentArticle[inputV.name]} />
      ))}
        <SubmitButton label={isEditing ? "Mettre à jour" : "Ajouter"} />
      </Form>

      <ArticlesContainer>
        {myArticles.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleImage src={article.image} alt={article.title} />
            <ArticleDescription>{article.description}</ArticleDescription>
            <DeleteButton onClick={() => handleDelete(article.id)}>
              Supprimer
            </DeleteButton>
            <EditButton onClick={() => handleEdit(article.id)}>
              Modifier
            </EditButton>
          </ArticleCard>
        ))}
      </ArticlesContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ArticleCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ArticleTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
