import { useState } from "react";
import { Link } from "react-router-dom";
import "./connexion.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "L'email est requis*";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "L'email n'est pas valide*";

    if (!password) newErrors.password = "Le mot de passe est requis*";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } 
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group1">
        <label className="logEmail" htmlFor="logEmail">
          Email*
        </label>
        <input
          className="email"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="form-group2">
        <label className="logPassword" htmlFor="logPassword">
          Mot de passe*
        </label>
        <input
          className="password"
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label className="hide">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Afficher le mot de passe
        </label>
      </div>
      <button type="submit" className="loginRight">
        Se connecter
      </button>

      <Link to="/inscription">
        <p className="create">Créez un compte</p>
      </Link>
    </form>
  );
}

export default LoginForm;
