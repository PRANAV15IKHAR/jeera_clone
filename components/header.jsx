import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <div>
        <SignedOut>
            <SignInButton></SignInButton>
        </SignedOut>

        <SignedIn>
            <UserButton></UserButton>
        </SignedIn>
    </div>
  )
}

export default Header