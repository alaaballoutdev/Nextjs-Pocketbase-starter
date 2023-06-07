import NextAuth , {AuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import pocket from 'lib/PocketBaseSingleton'
export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "Username or email" },
            password: { label: "Password", type: "password", placeholder:"........" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            try{
            const authData= await pocket.collection('users').authWithPassword(credentials?.username||'',credentials?.password||'');
            return authData.record
            }catch(error){
                return null;
            }
        }
        })
      ],
}



const handler  = NextAuth(authOptions);


export {handler as GET, handler as POST}