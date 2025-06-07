import React, { useEffect, useState } from "react";
import Loading from "../components/Login/Loading";
import LoginMain from "../components/Login/LoginMain";
import RunLogin from "../backend/RunLogin";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null); // Pour afficher un message d'erreur

  // Fonction pour gérer la soumission du formulaire de login
  const handleLogin = async () => {
    if (!input.email || !input.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      await RunLogin({ email: input.email, password: input.password });
    } catch (err) {
      setError("Erreur lors de la connexion. Veuillez réessayer.");
    }
  };

  useEffect(() => {
    // Simulation du temps de chargement pendant 3 secondes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Nettoyage de l'effet
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LoginMain
          input={input}
          setInput={setInput}
          handleLogin={handleLogin}
          error={error} // Passer l'erreur à LoginMain
        />
      )}
    </>
  );
}
