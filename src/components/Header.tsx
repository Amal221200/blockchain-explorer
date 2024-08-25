"use client"
import Link from "next/link";
import ethLogo from "@/assets/eth-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="border-b-2">
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src={ethLogo} alt="ethereum" width={25} />
          <h4 className="font-semibold">Blockchain Explorer</h4>
        </Link>
        <nav className="flex gap-x-2">
          <Link href="/blocks" className={cn("address-link", pathname === '/blocks' && "text-blue-500")}>Blocks</Link>
          <Link href="/transactions" className={cn("address-link", pathname === '/transactions' && "text-blue-500")}>Transactions</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header