import { useQuery, gql } from "@apollo/client";

interface propTypes {
  email: string;
  password: string;
}

// Définir la requête GraphQL pour récupérer les informations de l'utilisateur
const GET_USER_INFO = gql`
  query GetUserInfo($email: String!, $password: String!) {
    users(where: { email: { _eq: $email }, password: { _eq: $password } }) {
      user_id
      name
      email
      password
      about_me
      joined
      is_active
    }
  }
`;

export default function RunLogin({ email, password }: propTypes) {
  const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: { email, password }, // Email et mot de passe correspondants
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data ? (
        <div>
          <h3>Bienvenue, {data.users[0].name}</h3>
          <p>Email: {data.users[0].email}</p>
          <p>About me: {data.users[0].about_me}</p>
          <p>Joined: {data.users[0].joined}</p>
          <p>Status: {data.users[0].is_active ? "Active" : "Inactive"}</p>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}
