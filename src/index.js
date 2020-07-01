"use strict";

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});
const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const mongodb = require("./database");

const typeDefs = importSchema("src/schema.graphql");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const init = async () => {
  await mongodb();
};

server.listen({ host: HOST, port: PORT }).then(({ url }) => {
  init();
  console.log(`🚀  Server ready at ${url}`);
});
