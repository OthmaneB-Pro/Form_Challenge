import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Nom</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Nom"
          />
          <label>Mot de passe</label>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="mot de passe"
          />
          <button>Valider</button>
        </form>
      </div>
    </div>
  );
}
