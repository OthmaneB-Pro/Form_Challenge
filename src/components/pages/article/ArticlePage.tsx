import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

type ArticleType = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const EmptyArticle = {
  id: "",
  title: "",
  image: "",
  description: "",
};

export default function ArticlePage() {
  const { username } = useParams<{ username: string }>();
  const [onForm, setOnForm] = useState(false);
  const [myArticle, setMyArticle] = useState<ArticleType[]>([]);
  const [article, setArticle] = useState<ArticleType>(EmptyArticle);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleDelete = (articleId: string) => {
    const updatedArticles = myArticle.filter((article) => articleId !== article.id);
    setMyArticle(updatedArticles);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id, ...articleWithoutId } = article;

    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...articleWithoutId,
    };

    setMyArticle((prevArticles) => [...prevArticles, newProductToAdd]);

    setArticle(EmptyArticle);
  };

  return (
    <Container>
      <Header>Vos Articles, {username}</Header>
      <ToggleButton onClick={() => setOnForm(!onForm)}>
        {onForm ? "Annuler l'ajout" : "Ajouter un article"}
      </ToggleButton>

      {onForm && (
        <Form onSubmit={handleSubmit}>
          <Input
            name="title"
            value={article.title}
            onChange={handleChange}
            placeholder="Write a title"
          />
          <Input
            name="image"
            value={article.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <Input
            name="description"
            value={article.description}
            onChange={handleChange}
            placeholder="Write a description"
          />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      )}

      <ArticlesContainer>
        {myArticle.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleImage src={article.image} alt={article.title} />
            <ArticleDescription>{article.description}</ArticleDescription>
            <DeleteButton onClick={() => handleDelete(article.id)}>Delete</DeleteButton>
          </ArticleCard>
        ))}
      </ArticlesContainer>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
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

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
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
