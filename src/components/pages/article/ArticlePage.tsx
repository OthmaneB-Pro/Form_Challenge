import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { username } = useParams();
  return (
    <div>
      <h1>Vos Articles {username}</h1>
      <button>Ajouter un article</button>

      <div>
        <h2>Titre</h2>
        <img src="/" alt="Img" />
        <p>Description</p>
      </div>
    </div>
  );
}
