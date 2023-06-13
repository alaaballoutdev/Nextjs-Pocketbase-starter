import SignOut from "components/Global/SignOut";
import Posts from "components/Post/Posts";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
export const revalidate = 0;
// user
export default async function Home() {
  let posts: Post[] | null = null;
  try {
    await pocket.collection("users").authRefresh();
    if (pocket.authStore.isValid) {
      posts = await pocket.collection("posts").getFullList({
        expand: "author",
      });
      return (
        <>
          <h1 className="text-center text-4xl my-16">Posts</h1>
          <Posts posts={posts} />
        </>
      );
    } else {
      revalidatePath("/");
    }
  } catch (error) {
    // return <SignOut />;
  }
}
