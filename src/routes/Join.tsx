// la logique métier, qui passe les props
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ApolloClient,
  NormalizedCacheObject,
  useApolloClient,
} from "@apollo/client";
import JoinUser from "../components/Join/JoinUser";
import Loading from "../components/Login/Loading";
import { runSignup } from "../backend/RunSignup";

interface InputState {
  user_id: string;
  name: string;
  email: string;
  password: string;
}

export default function Join() {
  const client = useApolloClient() as ApolloClient<NormalizedCacheObject>;
  const navigate = useNavigate();

  const [input, setInput] = useState<InputState>({
    user_id: "",
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.user_id || !input.name || !input.email || !input.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const user = await runSignup(
        client,
        input.user_id,
        input.name,
        input.email,
        input.password
      );

      if (user) {
        console.log("Utilisateur inscrit :", user);
        navigate("/main");
      } else {
        setError("Erreur lors de l'inscription.");
      }
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  return loading ? (
    <Loading />
  ) : (
    <JoinUser
      input={input}
      handleJoin={handleJoin}
      error={error}
      loading={loading}
      handleInput={handleInput}
    />
  );
}
