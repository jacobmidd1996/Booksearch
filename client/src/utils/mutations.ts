import { gql } from "@apollo/client";

export const login = gql`
  mutation login(email: string!, password:string!) {
    login(email: $email, password: $password) {
      token
      user{
       id: string
  username: string!
  email: string!
  password: string!
  savedBooks: Book[]
  bookCount: number
      }
      email
      password
    }
  }
`;

export const addUser = gql`
  mutation addUser(username: string!, email: string!, password: string!) {
    addUser(username: $username, email: $email, password: $password) {
    token
      user{
       id: string
  username: string!
  email: string!
  password: string!
  savedBooks: Book[]
  bookCount: number
      }
      email
      password
    }
`;
export const saveBook = gql`
mutation saveBook(authors: string[],description: string!, title: string!, bookId: string!, image: string, link: string) {
saveBook(authors: $authors ,description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
token
user{
id: string
  username: string!
  email: string!
  password: string!
  savedBooks: Book[]
  bookCount: number
}
  email
  password
}
`;
export const REMOVE_BOOK = gql`
mutation removeBook(bookId: string!) {
removeBook(bookId: $bookId)
token
user{
id: string
  username: string!
  email: string!
  password: string!
  savedBooks: Book[]
  bookCount: number
}
  email
  password
}
  `;
