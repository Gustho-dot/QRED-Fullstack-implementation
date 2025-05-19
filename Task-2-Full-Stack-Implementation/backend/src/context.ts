import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export type Context = {
  prisma: PrismaClient;
};

// TODO: expand to handle auth
export const createContext = async (): Promise<Context> => ({
  prisma,
});