import SignOut from "components/Global/SignOut";
import CreatePostForm from "components/Post/CreatePostForm";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
export const metadata = {
  title: "Create Post | Post in",
};
async function createpost() {
  try {
    await pocket.collection("users").authRefresh();
    if (pocket.authStore.isValid) {
      return (
        <div className="min-h-screen">
          <h1 className="text-center text-xl font-bold">Create Post</h1>
          <CreatePostForm />
        </div>
      );
    } else {
      revalidatePath("/");
    }
  } catch (error) {
    return <SignOut />;
  }
}

export default createpost;
