import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ArticleType } from "./articleComponents/typeArticle";
import { EmptyArticle } from "./articleComponents/EmptyArticle";
import TitleForm from "../../reusable-ui/TitleForm";
import SubmitButton from "./articleComponents/SubmitButton";
import { inputValue } from "./articleComponents/inputValue";
import InputArticle from "../../reusable-ui/InputArticle";
import ArticleCard from "../../reusable-ui/ArticleCard";

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
          <InputArticle
            key={inputV.name}
            name={inputV.name}
            onChange={handleChange}
            placeholder={inputV.placeholder}
            value={currentArticle[inputV.name]}
          />
        ))}
        <SubmitButton label={isEditing ? "Mettre à jour" : "Ajouter"} />
      </Form>

      <ArticlesContainer>
        {myArticles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            description={article.description}
            src={article.image}
            alt={article.alt}
            title={article.title}
            onDelete={() => handleDelete(article.id)}
            onEdit={() => handleEdit(article.id)}
          ></ArticleCard>
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

const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;
