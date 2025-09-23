'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    {"label":"Home", "href":"/"},
    {"label":"Companions", "href":"/companion-library"},
    {"label":"My Journey", "href":"/my-journey"},
    {"label":"Sign In", "href":"/sign-in"}
]

const NavItems = () => {

    const pathname = usePathname();

  return (
    <div className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link key={item.label} 
        href={item.href}
        className={cn(pathname === item.href && 'text-primary font-semibold')}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
