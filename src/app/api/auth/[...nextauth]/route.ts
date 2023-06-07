import NextAuth , {AuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import pocket from 'lib/PocketBaseSingleton'
import { cookies } from 'next/headers';
export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
      
          name: "Credentials",
          
          credentials: {
            username: { label: "Username", type: "text", placeholder: "Username or email" },
            password: { label: "Password", type: "password", placeholder:"•••••••••••" }
          },
          async authorize(credentials, req) {
              const cookie=  cookies();
             const cookie_object= cookie.get('pocket');
             pocket.authStore.loadFromCookie(cookie_object?.value||'');
             if(pocket.authStore.isValid){
                await pocket.collection('users').authRefresh();
                return pocket.authStore.model; 
             }

            try{
              
              const authData= await pocket.collection('users').authWithPassword(credentials?.username||'',credentials?.password||'');
              cookie.set('pocket',pocket.authStore.exportToCookie())
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