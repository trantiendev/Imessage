import { gql } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Queries: {

  },
  Mutations: {
    createUsername: gql`
      mutation CreateUsername($username: String!) {
        createUsername(username: $username) {
          success
          error
        }
      }
    `,
  }
}