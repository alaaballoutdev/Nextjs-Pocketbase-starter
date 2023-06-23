import BasicModal from "components/Global/BasicModal";
import CreatePostForm from "components/Post/CreatePostForm";
export const metadata = {
  title: "Create Post | Post in",
};
async function createpost() {
  return (
    <BasicModal>
      <h1 className="text-center text-xl font-bold mt-10">Create Post</h1>
      <CreatePostForm />
    </BasicModal>
  );
}

export default createpost;
