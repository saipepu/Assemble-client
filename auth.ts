import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import { api } from '@/app/api/index'

declare module 'next-auth' {

  interface Session {
    accessToken: string;
  }
  interface User {
    accessToken?: string;
  }
}

// declare module 'next-auth/jwt' {
//   interface JWT {
//     accessToken?: string;
//   }
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "select_account"
        }
      }
    }),
    Github({
      authorization: {
        params: {
          prompt: "select_account"
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {

        let dto = {
          "firstName": user.name,
          "email": user.email,
          "profile": user.image,
          "password": user.email
        }

        const response = await fetch(`${api}/sign-up`, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dto)
        })
        .then(response => response.json())
        .catch(error => console.log(error))

        
        if(response?.success) {

          user.accessToken = response.message.accessToken
          return true
          
        }
        return false

      } catch(error) {
        console.log(error, 'error')
        return false
      }
    },
    async jwt({token, user, account, profile}) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session
    }
  }
})