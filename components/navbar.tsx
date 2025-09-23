import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
        </div>
      </Link>
      <div>
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
