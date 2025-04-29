import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prismaCli } from "../../../../prismaCli/prismaClient";

import bcrypt from "bcryptjs";

export const authConfig = {
  adapter: PrismaAdapter(prismaCli),
  providers: [
    CredentialsProvider({
      credentials: {},

      async authorize(credentials, req) {
        let user;

        if (!credentials?.email) {
          throw new Error("Email is required");
        }

        console.log("credentials", credentials);

        user = await prismaCli.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          throw new Error("No user found");
        }

        let hashPass;

        hashPass = await bcrypt.compare(credentials.password, user.password);

        if (!hashPass) {
          throw new Error("Invalid Password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.id = user?.id), (token.name = user?.username);

        token.status = user?.status;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token?.id;
      session.user.name = token?.name;

      return session;
    },
  },

  session: { strategy: "jwt" },
  secret: "1",
};
