import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    name : "",
    password : "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
  }
  return ( 
    <div>
      <div className="container">
        <form>
          <label>Nom</label>
          <input name="name" value={user.name} onChange={handleChange} placeholder="Nom" />
          <label>Mot de passe</label>
          <input name="password" value={user.password} onChange={handleChange} placeholder="mot de passe" />
          <button>Valider</button>
        </form>
      </div>
    </div>
  );
}
