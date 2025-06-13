// component l'interface
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

interface InputState {
  user_id: string;
  name: string;
  email: string;
  password: string;
}

interface PropTypes {
  input: InputState;
  handleJoin: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string | null;
  loading: boolean;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function JoinUser({
  input,
  handleJoin,
  error,
  loading,
  handleInput,
}: PropTypes) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-8">
        <div className="w-full max-w-md p-8 bg-white shadow rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Inscription
          </h2>

          {error && <div className="mb-4 text-center text-red-500">{error}</div>}

          <form onSubmit={handleJoin} className="space-y-6">
                    <div>
              <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                User Id (personalisé)
              </label>
              <input
                type="text"
                id="user_id"
                name="user_id"
                value={input.user_id}
                onChange={handleInput}
                required
                disabled={loading}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={input.name}
                onChange={handleInput}
                required
                disabled={loading}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={input.email}
                onChange={handleInput}
                required
                disabled={loading}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={handleInput}
                required
                disabled={loading}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 font-semibold text-white transition duration-200 rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-600 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Inscription en cours..." : "S'inscrire"}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="font-medium text-cyan-600 hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
