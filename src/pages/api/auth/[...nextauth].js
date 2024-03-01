import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    AzureADProvider({
      clientId: `${process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET}`,
      tenantId: `${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
      authorization: {
        params: { scope: "openid email profile User.Read  offline_access" },
      },
      name: "Microsoft",
      httpOptions: { timeout: 10000 },
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
  pages: {
    signIn: "/auth/signin",
  },
};

const authHandler = NextAuth(authOptions);

export default authHandler;
