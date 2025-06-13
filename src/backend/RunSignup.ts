// envoyer les données au server GraphQL
import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
mutation {
  createUser(name: "Jean", email: "jean@mail.com", password: "1234") {
    user_id
    name
    email
  }
}
`;

export async function runSignup(
  client: ApolloClient<NormalizedCacheObject>,
  name: string,
  email: string,
  password: string
) {
  try {
    const response = await client.mutate({
      mutation: SIGNUP_MUTATION,
      variables: { name, email, password },
    });

    return response.data?.createUser;
  } catch (error: any) {
  console.error("Signup error:", error);
  throw new Error(error.message || "Erreur lors de l'inscription.");
}
}
