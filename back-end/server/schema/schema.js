const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Album {
    id: ID
    name: String
    img: String
    genre: String
    date: String
  }

  type Query {
    albums: [Album]
    album(id: ID!): Album
  }
`;

module.exports = typeDefs;
