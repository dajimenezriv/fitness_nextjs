import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
  ],
  debug: true,
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
        }
      }

      return token
    },
    async session({ session, token, user }) {
      return {
        ...session,
        accessToken: token.accessToken,
      }
    },
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXT_PUBLIC_SECRET
})
