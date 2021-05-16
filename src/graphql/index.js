const {makeExecutableSchema, gql} = require('apollo-server-koa')
const {mergeResolvers} = require('@graphql-tools/merge')

const Query = gql`
  type Query {
      _empty: String
  }

  type Mutation {
      null: Boolean
  }
`

const SchemaDefinition = gql`
  schema {
      query: Query
      mutation: Mutation
  }
`

const resolver = {

};


module.exports = makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query
    ],

    resolvers: mergeResolvers([
        resolver
    ])
})