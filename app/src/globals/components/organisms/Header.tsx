import Link from "next/link";
import Logo from "../atoms/Logo"

const Header = () => {
  return (
    <header className="fixed! bg-white border-b border-muted  z-49! h-20! w-screen px-4 top-0">
      <div className="container flex items-center w-full h-full mx-auto">
        <Link href="/" className="group">
          <Logo />
        </Link>
      </div>
    </header>
  );
}

export default Header