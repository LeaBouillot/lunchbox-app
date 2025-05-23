import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function LoginMain() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      // dispatch action from hooks
      console.log("Form submitted", input);
      return;
    }
    alert("Veuillez remplir les champs requis.");
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
 // console.log(`${name}: ${value}`); 
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
          <form onSubmit={handleSubmitEvent} className="space-y-6">
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
                name="username"
                value={input.username}
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
