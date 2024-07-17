import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./inscription.css";

function Register() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const [showPassword, setShowPassword] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { username, mail, password, confirmPassword } = registerForm;

    if (!username || !mail || !password || !confirmPassword) {
      notifyFail("Tous les champs sont requis");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      notifyFail("L'adresse e-mail doit inclure un '@' et un domaine valide");
      return false;
    }

    if (password.length < 6) {
      notifyFail("Le mot de passe doit comporter au moins 6 caractères");
      return false;
    }

    if (password !== confirmPassword) {
      notifyFail("Les mots de passe ne correspondent pas");
      return false;
    }

    return true;
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${ApiUrl}/auth/register`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerForm),
      });

      if (response.status === 201) {
        notifySuccess("Votre profil a bien été créé. Vous pouvez vous connecter");
        setTimeout(() => {
          navigate("/connexion");
        }, 2000);
      } else {
        const errorData = await response.json();
        notifyFail(errorData.message || "Une erreur s'est produite");
      }
    } catch (err) {
      console.error(err);
      notifyFail("Une erreur s'est produite");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <div className="form-group1">
        <label className="field" htmlFor="pseudo">Pseudo*</label>
        <input
          placeholder="pseudo"
          type="text"
          name="username"
          id="field"
          value={registerForm.username}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="form-group2">
        <label className="field" htmlFor="mail">Adresse email*</label>
        <input
          placeholder="adresse email"
          type="email"
          name="mail"
          id="field"
          value={registerForm.mail}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="form-group3">
        <label className="field" htmlFor="password">Mot de passe*</label>
        <input
          placeholder="mot de passe"
          type={showPassword ? "text" : "password"}
          name="password"
          id="field"
          value={registerForm.password}
          onChange={handleRegisterForm}
        />
      </div>
      <div className="form-group4">
        <label className="field" htmlFor="confirmPassword">Confirmez le mot de passe*</label>
        <input
          placeholder="confirmez le mot de passe"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          id="field"
          value={registerForm.confirmPassword}
          onChange={handleRegisterForm}
        />
      </div>
      <label className="toggle-password-checkbox">
        <input
          type="checkbox"
          onChange={togglePasswordVisibility}
        />
        Afficher le mot de passe
      </label>
      <button type="submit" className="validate2">
        S'enregistrer
      </button>
    </form>
  );
}

export default Register;
