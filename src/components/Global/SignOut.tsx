'use client'
import { signOut } from "next-auth/react";
import { useEffect } from "react"

function SignOut() {
  useEffect(()=>{
   signOut({callbackUrl:'/api/auth/logout'});
  },[]);
  
    return (
      <></>
    )
}

export default SignOut