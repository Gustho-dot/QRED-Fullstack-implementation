import { Resolvers } from './__generated__/resolvers-types.js';
import { Context } from './context.js';

export const resolvers: Resolvers<Context> = {
  Query: {
    companies: async (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.company.findMany({
        include: {
          cards: {
            include: {
              transactions: true,
            },
          },
        },
      });
    },
    company: async (_parent: any, { id }: { id: string }, ctx: Context) => {
      return ctx.prisma.company.findUnique({
        where: { id },
        include: {
          cards: {
            include: {
              transactions: true,
            },
          },
        },
      });
    },
    card: async (_parent: any, { id }: { id: string }, ctx: Context) => {
      return ctx.prisma.card.findUnique({
        where: { id },
        include: { transactions: true },
      });
    },
    cards: async (_parent: any, _args: any, ctx: Context) => {
      return ctx.prisma.card.findMany({
        include: { transactions: true },
      });
    },
  },
  // Optional nested resolvers (can be removed if Prisma handles them correctly)
  // Company: {
  //   cards: async (parent, _args, ctx) => {
  //     return ctx.prisma.company.findUnique({ where: { id: parent.id } }).cards();
  //   },
  // },
  // Card: {
  //   transactions: async (parent, _args, ctx) => {
  //     return ctx.prisma.card.findUnique({ where: { id: parent.id } }).transactions();
  //   },
  // },
};