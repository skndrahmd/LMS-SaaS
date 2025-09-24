'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from "@clerk/nextjs";

const navItems = [
    {"label":"Home", "href":"/"},
    {"label":"Companions", "href":"/companion-library"},
    {"label":"My Journey", "href":"/my-journey"}
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
      
      {/* Clerk Authentication Components */}
      <SignedOut>
        <div className="flex items-center gap-4">
          <SignInButton>
            <button className="text-gray-700 hover:text-primary font-medium btn-signin">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8"
            }
          }}
        />
      </SignedIn>
    </div>
  );
};

export default NavItems;
