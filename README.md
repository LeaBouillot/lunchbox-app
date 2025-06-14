# 🥪 Lunchbox-app Frontend

Bienvenue sur **Lunchbox-app**, une application web pour commander facilement votre déjeuner. Ce frontend permet aux utilisateurs de créer un compte et de s'inscrire via une interface simple et intuitive.

## 🎯 Objectif

Faciliter l'inscription des utilisateurs pour accéder à un service de commande de repas à midi.

## 🚀 Fonctionnalités

- ✍️ Inscription utilisateur (nom, email, mot de passe)
- 📡 Communication avec un backend GraphQL via Apollo Client
- 🛡️ Gestion d'erreurs côté client
- 🎨 Interface responsive et agréable avec React + Tailwind CSS

## 📁 Structure des fichiers

```

src/
├── components/
│   ├── Join/
│   │   └── JoinUser.tsx       # Formulaire d'inscription
│   ├── Login/
│   │   └── Loading.tsx
│   │   └── LoginMain.tsx      # Formulaire login
│   └── Footer.tsx             # Pied de page
├── backend/
│   └── RunLogin.ts
│   └── RunSignup.ts           # Fonction d'envoi de mutation d'inscription
├── routes/
│   └── Join.tsx               # Page contenant la logique du formulaire
│   └── Login.tsx
│   └── Main.tsx
│   └── MyOrder.tsx
│   └── Order.tsx
├── App.tsx
├── index.tsx

```

## 🧰 Dépendances principales

- React
- TypeScript
- Apollo Client
- React Router DOM
- Tailwind CSS (ou autre framework CSS selon ton projet)

## 🔧 Installation

1. Clone ce dépôt :

```bash
git clone https://github.com/ton-utilisateur/lunchbox-frontend.git
cd lunchbox-frontend
```

2. Installe les dépendances :

```bash
npm install
```

3. Configure l’URL de ton backend GraphQL dans le client Apollo (par exemple dans `App.tsx` ou `apolloClient.ts`) :

```ts
const client = new ApolloClient({
  uri: "http://localhost:4000", // 🚨 Remplace avec ton backend si besoin
  cache: new InMemoryCache(),
});
```

4. Lance le serveur de développement :

```bash
npm start
```

Accède ensuite à [http://localhost:3000/join](http://localhost:3000/join) pour tester l’inscription.

## ✅ Exemple d’utilisation

Renseigne ton nom, e-mail et mot de passe sur `/join`, clique sur **S'inscrire**, les données seront envoyées via la mutation GraphQL à ton backend.

## 📦 Build de production

```bash
npm run build
```

---

## 📌 Notes

- Assure-toi que le backend GraphQL est démarré sur le bon port (par défaut : `http://localhost:4000`).
- Tu peux tester les requêtes directement dans Apollo Sandbox ou Postman si nécessaire.

---

## 🧑‍💻 Auteur

Ce projet a été développé dans un but d'apprentissage. N'hésite pas à l'adapter à tes besoins !

```

```
