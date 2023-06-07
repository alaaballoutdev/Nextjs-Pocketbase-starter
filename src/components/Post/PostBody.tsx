'use client'
import { useState,useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function PostBody({body}:{body:string}) {
const [isMounted,setIsMounted] =useState(false);

useEffect(()=>{
    setIsMounted(true)
}
    ,[isMounted])
  
  
return isMounted?(
    <p dangerouslySetInnerHTML={{__html:body}}></p>     
  ):(<Skeleton count={5}/>)
}

export default PostBody