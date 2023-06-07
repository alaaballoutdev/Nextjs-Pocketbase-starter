declare type Author= {
    username:string,
    email:string,
    name:string,
    active:true
  }
  
  
 declare type Post ={
    title:string,
    body:string,
    created:string,
    updated:string,
    expand :{author:Author}
  }