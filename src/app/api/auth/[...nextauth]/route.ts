import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

import Cookies from "js-cookie";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile",
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (account?.provider === "google" && account.access_token) {
        try {
          // const cookieStore = await cookies();

          // const response = await fetch(
          //   `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_CUSTOM_API}/google-login`,
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },

          //     body: JSON.stringify({
          //       access_token: account.access_token,
          //     }),
          //   }
          // );

          // if (!response.ok) {
          //   const errorData = await response.json();
          //   console.error("Backend login failed:", errorData);

          //   cookieStore.set("auth_error", errorData.message, {
          //     path: "/",
          //     maxAge: 10, // на несколько секунд
          //   });
          //   return false;
          // }

          // const data = await response.json();

          // account.id_token = data?.token;

          // cookieStore.set("access_token", data?.token, {
          //   path: "/",
          //   maxAge: 7200,
          // });

          return true;
        } catch (error) {
          console.error("❌ Request error:", error);
          return false;
        }
      }

      return false;
    },
    async redirect({ url, baseUrl }) {
      const match = url.match(/[?&]callback=([^&#]+)/);
      const callback = match ? decodeURIComponent(match[1]) : null;
      return baseUrl + `/auth/complete?callback=${callback ?? url}`;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.customToken = account.id_token;
      }

      return token;
    },
    async session({ session, token }) {
      // Добавляем access_token в session объект (если используешь useSession)
      session.accessToken = token.accessToken;
      session.customToken = token.customToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/",
  },
});
export { handler as GET, handler as POST };
