import Posts from "components/Post/Posts";
import pocket from "lib/PocketBaseSingleton"




export default  async function Home() {
  
  let posts:Post[]|null = null;
  try{
   posts = await pocket.collection('posts').getFullList({
    expand:'author'
  })
  

    
  }catch(error){
    throw new Error('There is a server error');
  }
  
  
  
  return (
    <>
   
    <h1 className="text-center text-4xl my-16">Posts</h1>
    <Posts posts={posts} />
  
    
    
    </>


  )
}
