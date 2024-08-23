import Link from "next/link";
import ethLogo from "@/assets/eth-logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-x-2">
          <Image src={ethLogo} alt="ethereum" width={25} />
          <h4 className="font-semibold">Blockchain Explorer</h4>
        </Link>
        <div />
      </div>
    </header>
  )
}

export default Header