import gql from 'graphql-tag';

export default gql`
mutation ($id: ID!) {
  deleteUser(input: {
  	id: $id
  }) {
    __typename
    id
    name
    email
  }
}`;
