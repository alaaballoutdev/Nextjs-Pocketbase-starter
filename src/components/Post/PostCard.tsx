import PostBody from "./PostBody"



function PostCard({post}:{post:Post}) {
  
  return (
    <div className="w-3/4 m-auto border border-gray-500 p-4 my-5" >
      <p className="text-gray-500">@{post.expand.author.username}</p>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <PostBody  body={post.body}/>
      <p className="text-gray-500">{new Date(post.created).toLocaleString()}</p>
      
    </div> 
  )
}

export default PostCard