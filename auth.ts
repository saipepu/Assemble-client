import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { api } from "@/app/api/index";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    assembleUser: any;
  }
  interface User {
    accessToken?: string;
    assembleUser: any;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    Github({
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        let dto = {
          firstName: user.name,
          email: user.email,
          profile: user.image,
          password: user.email,
        };

        const response = await fetch(`${api}/sign-up`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dto),
        })
          .then((response) => response.json())
          .catch((error) => console.log(error));

        if (response?.success) {
          user.accessToken = response.message.accessToken;
          user.assembleUser = response.message.user;
          return true;
        }
        return false;
      } catch (error) {
        console.log(error, "error");
        return false;
      }
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.assembleUser = user.assembleUser;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.assembleUser = token.assembleUser;
      return session;
    },
  },
});
