import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
        <Link href="/">
            <Image
            src="/hilink-logo.svg"
            alt="logo"
            height={30}
            width={75}
            />
        </Link>

        <ul className="hidden gap-12 h-full lg:flex">
        {navLinks.map(({href,key,label})=>(
            <Link href={href} key={key}>
            {label}
            </Link>
        ))}
        </ul>

        <div className="flex items-center justify-center hidden">
          <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="px-8 py-4 bg-green-90 text-white transition-all hover:bg-black"
          />
        </div>

        <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar