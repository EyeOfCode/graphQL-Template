"use strict";

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});
const { ApolloServer, makeExecutableSchema } = require("apollo-server");
const mongodb = require("./database");

const ConstraintDirective = require("apollo-server-constraint-directive");
const { importSchema } = require("graphql-import");

const { formatError } = require("./middleware/validate");
const typeDefs = importSchema("src/schema.graphql");
const resolvers = require("./resolvers");
const schemaDirectives = {
  constraint: ConstraintDirective,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
});

const server = new ApolloServer({ schema, formatError });

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const init = async () => {
  await mongodb();
};

server.listen({ host: HOST, port: PORT }).then(({ url }) => {
  init();
  console.log(`🚀  Server ready at ${url}`);
});
