import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { username } = useParams();
  const [onForm, setOnForm] = useState(false);
  const [article, setArticle] = useState({
    id: "",
    title: "",
    image: "",
    description: "",
  });
  return (
    <div>
      <h1>Vos Articles {username}</h1>
      <button onClick={() => setOnForm(!onForm)}>
        {onForm ?  "Annuler l'ajout" : "Ajouter un article"}
      </button>

      {onForm && (
        <div>
          <input placeholder="write a title" />
          <input placeholder="write a url" />
          <input placeholder="write a description" />
        </div>
      )}

      <div>
        <h2>Titre</h2>
        <img src="/" alt="Img" />
        <p>Description</p>
      </div>
    </div>
  );
}
