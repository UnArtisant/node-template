const dotenv = require('dotenv')
const schema = require("./src/graphql/index")
dotenv.config()

const Koa = require('koa')
const Router = require('koa-router')

const { ApolloServer } = require("apollo-server-koa")

const app = new Koa();
const port = process.env.PORT || 3000;

const server = new ApolloServer({
    schema,
    context: ({ ctx: { req } }) => ({req})
})

server.applyMiddleware({app})

app.listen({ port: 4000 }, async () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
