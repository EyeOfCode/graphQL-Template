"use strict";

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
const { ApolloServer } = require("apollo-server");
const mongodb = require("./database");

const fs = require("fs");
const typeDefs = fs.readFileSync("./src/schema.graphql", { encoding: "utf-8" });

const resolvers = require("./src/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const init = async () => {
  await mongodb();
};

server.listen({ host: HOST, port: PORT }).then(({ url, ...res }) => {
  init();
  console.log(`🚀  Server ready at ${url}`);
});
