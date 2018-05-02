import gql from 'graphql-tag';

export default gql`
query($id: ID!) {
  getUser(id: $id) {
    __typename
    id
    name
    email
    phone
    address
  }
}`;