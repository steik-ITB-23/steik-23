import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }) {
      console.log("SignIn Callback:", user);
      return !!user;
    },
    async session({ session, token, user }) {
      console.log("Session Callback:", session, user);
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export default authHandler;
