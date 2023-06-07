'use client'
import {signOut} from 'next-auth/react'


function SignOutButton() {
  async function Logout(){
    await signOut({callbackUrl:'/api/auth/logout'});
  }

  return (
    <button onClick={Logout}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute left-4 top-2">Logout</button>

  )
}

export default SignOutButton