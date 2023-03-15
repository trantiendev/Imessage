import { CreateUsernameResponse } from './types';
import { PrismaClient } from '@prisma/client';

export async function verifyAndCreateUsername(
  args: { userId: string; username: string },
  prisma: PrismaClient
): Promise<CreateUsernameResponse> {
  const { userId, username } = args;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      return {
        error: 'Username already taken. Try another',
      };
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.log('createUsername error', error);
    return {
      error: error?.message as string,
    };
  }
}
