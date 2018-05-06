import gql from 'graphql-tag';

export default gql`
query {
  listUsers(first: 5) {
    items {
      id
    }
  }
}`;

