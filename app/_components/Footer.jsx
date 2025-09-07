import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ec-logo.png";

export default function Footer() {
  return (
    <footer className=" bg-dark px-5 py-10">
      <div className=" flex flex-col items-center justify-center">
        <Link href={"/"}>
          <Image src={logo} width={100} height={100} />
        </Link>
        <ul className=" mt-10 text-center flex flex-col gap-y-2">
            <li><Link className=" text-white hover:text-primary " href={'/'}>Home</Link></li>
            <li><Link className=" text-white hover:text-primary" href={'/'}>New Tokens</Link></li>
            <li><Link className=" text-white hover:text-primary" href={'/'}>Top Projects</Link></li>
            <li><Link className=" text-white hover:text-primary" href={'/'}>New Crypto</Link></li>
        </ul>
        <ul className=" mt-2 text-center flex flex-col gap-y-2">
            <li><Link className=" text-white hover:text-primary" href={'/'}>Politics and Crypto</Link></li>
            <li><Link className=" text-white hover:text-primary" href={'/'}>New Tech</Link></li>
            <li><Link className=" text-white hover:text-primary" href={'/'}>Defi</Link></li>
            <li><Link className=" text-white hover:text-primary" href={'/'}>Upcoming Events</Link></li>
        </ul>
        <p className=" text-gray-300 text-sm mt-12">&copy; Emerging Crypto, 2025</p>
      </div>
    </footer>
  );
}
