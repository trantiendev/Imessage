import { Prisma, PrismaClient } from "@prisma/client";

/**
 * Server Configuration
 */
export interface Session {
  user?: User;
}

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
}

/**
 * Users
 */
export interface User {
  id: string;
  username: string;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}
