"use client";
import {
  IconHeart,
  IconHome,
  IconLogin,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  const IconLink = ({ href, icon, text }) => {
    return (
      <Link
        href={href}
        className={clsx(
          "flex flex-row justify-center items-center",
          pathname === href &&
            "text-black font-semibold bg-white px-2 py-1 rounded-full gap-2"
        )}
      >
        {icon}
        {pathname === href && (
          <span className="hidden sm:block font-semibold">{text}</span>
        )}
      </Link>
    );
  };

  return (
    <div className=" flex justify-between p-5 bg-slate-800 items-center text-white px-20">
      <div>
        <Link href="/">
          <h1 className="text-2xl lg:text-3xl font-bold ">MAYNOOT</h1>
        </Link>
      </div>
      <div className="flex justify-between gap-2 sm:gap-3 md:gap-5">
        <IconLink href="/" icon={<IconHome size={20} />} text="Home" />
        <IconLink
          href="/search"
          icon={<IconSearch size={20} />}
          text="Search"
        />
        <IconLink
          href="/cart"
          icon={<IconShoppingCart size={20} />}
          text="Cart"
        />
        <IconLink
          href="/favorites"
          icon={<IconHeart size={20} />}
          text="Favorites"
        />
        <IconLink href="/login" icon={<IconLogin size={20} />} text="Login" />
      </div>
    </div>
  );
}
