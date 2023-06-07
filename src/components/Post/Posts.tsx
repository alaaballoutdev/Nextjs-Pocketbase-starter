import PostCard from "./PostCard"

type Props = {
posts:Post[]
}

function Posts({posts}: Props) {
 
  return (
   <>
      {posts&&posts.map(post=>
      <PostCard post={post} key={post.created}/> 
    )}
   
   </>
  )
}

export default Posts