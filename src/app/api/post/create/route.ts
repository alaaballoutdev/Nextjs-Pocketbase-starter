import pocket from "lib/PocketBaseSingleton";


interface RequestBody{
    title:string;
    body:string;
    author:string;
}


export async function POST(request :Request){
   
    const body:RequestBody = await request.json();
    if(pocket.authStore.model?.id !== body.author){
        return new Response(JSON.stringify({message:"You are not allowed to add post to other users"}),{status:400})
    }
    
    
    const data = {
        title:body.title,
        body:body.body,
        author:body.author

    }
    try{
        const record =  await pocket.collection('posts').create(data);
        return new Response(JSON.stringify(record));
    }
    catch(error){
        return new Response(JSON.stringify({message:"Bad Request"}),{status:400});
    }
    

}