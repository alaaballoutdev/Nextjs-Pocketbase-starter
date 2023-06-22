import pocket from "lib/PocketBaseSingleton";
import dynamic from "next/dynamic";
const UserMenu = dynamic(() => import("components/Global/UserMenu/UserMenu"));

function Header() {
  return (
    <div className="w-full border-b-2 shadow-sm h-14 relative flex flex-wrap items-center justify-center">
      <UserMenu username={pocket.authStore.model?.name} />
      <h1 className="text-xl font-bold text-center">
        Pocketbase + Next.js starter
      </h1>
    </div>
  );
}

export default Header;
