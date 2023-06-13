import CreateAdminForm from "components/Admin/CreateAdminForm";
import SignOut from "components/Global/SignOut";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
//admin

async function page() {
  try {
    await pocket.admins.authRefresh();
    if (pocket.authStore.isValid) {
      return( 
        <div className="w-7/12 m-auto">
          <h1 className="text-xl font-bold text-center my-10">Create Admin</h1>
        <CreateAdminForm />
        </div>
        );
    } else {
      revalidatePath("/");
    }
  } catch (error) {
    return <SignOut />;
  }
}

export default page;
