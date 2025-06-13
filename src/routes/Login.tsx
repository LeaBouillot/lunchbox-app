import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useApolloClient,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";

export default function Login() {
  const client = useApolloClient() as ApolloClient<NormalizedCacheObject>;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!input.email || !input.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const user = await RunLogin(client, input.email, input.password);

      if (user) {
        console.log("Utilisateur connecté :", user);
        // TODO: stocker token/session selon ta logique
        navigate("/main"); // ou la page main après connexion
      } else {
        setError("Utilisateur ou mot de passe incorrect.");
      }
    } catch (err: any) {
      setError(
        err.message || "Erreur lors de la connexion. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

 const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null); // reset de l'erreur dès que l'utilisateur tape
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return loading ? (
    <Loading />
  ) : (
    <LoginMain
      input={input}
      setInput={setInput} 
      handleLogin={handleLogin}
      error={error}
      handleInput={handleInput}    // Passe handleInput en prop
    />
  );
}
