import gql from 'graphql-tag';

export default gql`
mutation ($id: ID!, $name: String!, $description: String) {
  createList(input: {
    user_id: $id
    name: $name
    description: $description
  }) {
    __typename
    id
    name
    description
    items
  }
}`;
