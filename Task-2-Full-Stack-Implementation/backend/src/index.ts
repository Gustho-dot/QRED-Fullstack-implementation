import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { createContext } from './context.js';
import { resolvers } from './resolvers.js';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  context: async ({ req }) => createContext(),
  listen: { port: 4000 }
}).then(({ url }) => {
  console.log(` Server ready at url: ${url}`);
});