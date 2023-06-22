import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import pocket from "lib/PocketBaseSingleton";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username or email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "•••••••••••",
        },
      },
      async authorize(credentials, req) {
        try {
          const authData = await pocket
            .collection("users")
            .authWithPassword(
              credentials?.username || "",
              credentials?.password || ""
            );

          return { ...authData.record, token: authData.token };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
