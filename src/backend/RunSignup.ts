// envoyer les données au server GraphQL
import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
  mutation CreateUser(
    $user_id: String!
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(user_id: $user_id, name: $name, email: $email, password: $password) {
      user_id
      name
      email
    }
  }
`;

export async function runSignup(
  client: ApolloClient<NormalizedCacheObject>,
  user_id: string,
  name: string,
  email: string,
  password: string
) {
  try {
    const response = await client.mutate({
      mutation: SIGNUP_MUTATION,
      variables: { user_id, name, email, password },
    });

    return response.data?.createUser;
  } catch (error: any) {
    console.error("Signup error:", error);
    throw new Error(error.message || "Erreur lors de l'inscription.");
  }
}
