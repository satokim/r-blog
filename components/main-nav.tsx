"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import { ReactNode, useState } from "react";
import MobileNav from "./mobile-nav";

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-10">
      {/* Blog Writer */}
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden sm:inline-block">Blog Writer</span>
      </Link>

      {/* Navigation */}
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg sm:text-sm font-medium hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Menu Bar */}
      <button className="md:hidden" onClick={() => setIsShowMenu(!isShowMenu)}>
        <span>Menu</span>
      </button>
      {isShowMenu && <MobileNav items={items} />}
    </div>
  );
}
