import { ApolloClient, gql, NormalizedCacheObject } from "@apollo/client";

const GET_USER_INFO = gql`
  query GetUserInfo($email: String!, $password: String!) {
    users(email: $email, password: $password) {
      user_id
      name
      email
      about_me
      joined
      is_active
    }
  }
`;

export default async function RunLogin(
  client: ApolloClient<NormalizedCacheObject>,
  email: string,
  password: string
) {
  // Vérification stricte des champs
  if (!email.trim() || !password.trim()) {
    throw new Error("Champs vides détectés");
  }

  try {
    console.log("Login vars:", email, password); // utile pour debug

    const { data } = await client.query({
      query: GET_USER_INFO,
      variables: { email, password },
      fetchPolicy: "no-cache",
    });

    if (!data.users || data.users.length === 0) {
      throw new Error("Utilisateur non trouvé ou mot de passe incorrect");
    }

    return data.users[0];
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Erreur lors de la connexion");
  }
}
