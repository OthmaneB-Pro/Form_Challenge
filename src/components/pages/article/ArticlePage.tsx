import { useState } from "react";
import { useParams } from "react-router-dom";

type ArticleType = {
    id: string;
    title: string;
    image: string;
    description: string;
}
const Empty_article = {
    id: "",
    title: "",
    image: "",
    description: "",
}

export default function ArticlePage() {

  const { username } = useParams<{ username: string }>();
  const [onForm, setOnForm] = useState(false);
  const [myArticle, setMyArticle] = useState<ArticleType[]>([]);
  const [article, setArticle] = useState<ArticleType>(Empty_article);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleDelete = (ArticleId : string) => {
    const deleteArticle = myArticle.filter((already) => ArticleId !== already.id)
    setMyArticle(deleteArticle)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { id, ...articleWithoutId } = article;
    
    const NewProductToAdd = {
      id: crypto.randomUUID(), 
      ...articleWithoutId,    
    };

    setMyArticle((prevArticles) => [...prevArticles, NewProductToAdd]);

    setArticle(Empty_article);
  };

  return (
    <div>
      <h1>Vos Articles {username}</h1>
      <button onClick={() => setOnForm(!onForm)}>
        {onForm ? "Annuler l'ajout" : "Ajouter un article"}
      </button>

      {onForm && (
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={article.title}
            onChange={handleChange}
            placeholder="write a title"
          />
          <input
            name="image"
            value={article.image}
            onChange={handleChange}
            placeholder="write a url"
          />
          <input
            name="description"
            value={article.description}
            onChange={handleChange}
            placeholder="write a description"
          />
          <button>Submit</button>
        </form>
      )}

      <div>
        {myArticle.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <img src={article.image} alt={article.title} />
            <p>{article.description}</p>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
