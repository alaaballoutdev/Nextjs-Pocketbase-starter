import SignOut from "components/Global/SignOut";
import pocket from "lib/PocketBaseSingleton";
import { revalidatePath } from "next/cache";
export const revalidate =0;
async function test() {
  try {
    await pocket.collection("users").authRefresh();
    if (pocket.authStore.isValid) {
  
  return (
    <div className=" m-auto">
      <h1 className="text-center text-4xl my-16">Users</h1>
      <pre>{JSON.stringify(pocket.authStore.isValid)}</pre>
    </div>
  );}
  else{
    revalidatePath('/');
  }
  }catch(error){
    return <SignOut/>
  }
}

export default test;
