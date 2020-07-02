"use strict";

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});
const { ApolloServer } = require("apollo-server");
const mongodb = require("./database");

const {
  constraintDirective,
  constraintDirectiveTypeDefs,
} = require("graphql-constraint-directive");
const { importSchema } = require("graphql-import");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = importSchema("src/schema.graphql");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs: [constraintDirectiveTypeDefs, typeDefs],
  resolvers,
  schemaTransforms: [constraintDirective()],
});

const server = new ApolloServer({ schema });

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const init = async () => {
  await mongodb();
};

server.listen({ host: HOST, port: PORT }).then(({ url }) => {
  init();
  console.log(`🚀  Server ready at ${url}`);
});
