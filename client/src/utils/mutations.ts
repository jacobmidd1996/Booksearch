import { gql } from "@apollo/client";

export const login = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`;

export const addUser = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;
export const saveBook = gql`
  mutation SaveBook(
    $description: String!
    $title: String!
    $bookId: String!
    $authors: [String]
    $image: String
    $link: String
  ) {
    saveBook(
      description: $description
      title: $title
      bookId: $bookId
      authors: $authors
      image: $image
      link: $link
    ) {
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      bookCount
      email
      username
    }
  }
`;
