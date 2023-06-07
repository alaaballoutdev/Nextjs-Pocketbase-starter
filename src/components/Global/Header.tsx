import SignOutButton from "./SignOutButton"


function Header() {
  return (
    <div className="w-full border-b-2 border-black h-14 relative flex flex-wrap items-center justify-center">
         <SignOutButton/>
        <h1 className="text-xl font-bold text-center">Pocketbase + Next.js starter</h1>
    </div>
  )
}

export default Header