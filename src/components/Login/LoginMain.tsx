import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

interface InputState {
  email: string;
  password: string;
}

interface PropTypes {
  input: InputState;
  setInput: React.Dispatch<React.SetStateAction<InputState>>;
  handleLogin: () => void;
  error: string | null; // Prop pour l'erreur
}

export default function LoginMain({
  input,
  setInput,
  handleLogin,
  error,
}: PropTypes) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-8">
        <div className="w-full max-w-md p-8 rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Connexion
          </h2>

          {/* Affichage de l'erreur */}
          {error && (
            <div className="mb-4 text-center text-red-500">{error}</div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="user-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="user-email"
                name="email"
                value={input.email}
                onChange={handleInput}
                placeholder="exemple@mail.com"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={input.password}
                onChange={handleInput}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white transition duration-200 rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-600"
            >
              Se connecter
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Vous n'avez pas de compte ?{" "}
            <Link
              to="/join"
              className="font-medium text-cyan-600 hover:underline"
            >
              Inscription
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* 
Étapes pour coder 

1. Comprendre le rôle du composant LoginMain.tsx
- afficher un formulaire de connexion permettant à l'utilisateur de se connecter en fournissant - un email et un mot de passe
- l'interaction avec l'état (input), 
- valider les données, 
- déclencher l'action de connexion.

2. Définir les props : Les informations que le composant recevra (données d’entrée, fonction de gestion de la soumission).
- input : les données d'entrée de l'utilisateur (email et mot de passe).
- setInput
- handleLogin : la fonction qui sera exécutée lors de la soumission du formulaire.
- error (optionnel) : pour afficher un message d'erreur si la connexion échoue.

3. Structurer le composant : 
Inputs : un pour l’email et un pour le mot de passe.
Un bouton pour soumettre le formulaire.
Une zone pour afficher les messages d’erreur .
Des liens (pour l'inscription ou pour réinitialiser le mot de passe).

4. Créer les fonctions pr gérer les événements
(handleInput) pour gérer le changement dans les champs de texte 
(handleSubmit) pour soumettre le formulaire 

5. Afficher les erreurs :
on passe l’erreur comme prop depuis le composant parent (Login.tsx)

6. Tester : Vérifie que tout fonctionne.

7. Révision du design
*/
