import pocket from "lib/PocketBaseSingleton";
import dynamic from "next/dynamic";
import SignOut from "./SignOut";
const UserMenu = dynamic(() => import("components/Global/UserMenu/UserMenu"));

function Header() {
  if (pocket.authStore.model?.name) {
    return (
      <div className="w-full border-b-2 shadow-sm h-14 relative flex flex-wrap items-center justify-center">
        <UserMenu username={pocket.authStore.model?.name} />
        <h1 className="text-xl font-bold text-center">
          Pocketbase + Next.js starter
        </h1>
      </div>
    );
  }
  return <SignOut />;
}

export default Header;
