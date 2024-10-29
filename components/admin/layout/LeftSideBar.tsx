'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createElement, useState } from "react";
import Logo from "../../../public/logo.png";
import { navLinks } from "@/lib/admin/constants";

const LeftSideBar = () => {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (label: string): void => {
    setOpenItems((prev: { [key: string]: boolean }) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="h-screen left-0 top-0 sticky p-4 flex flex-col gap-8 shadow-xl">
      <Link href={'/admin/dashboard'} className="flex items-center justify-center hover:cursor-pointer">
        <Image
          src={Logo}
          width={80}
          height={80}
          alt="PestandClean Logo"
        />
      </Link>
      <div className="flex flex-col gap-2 font-bold">
        {navLinks.map((link) => (
          <div key={link.label}>
            <Link
              className={`rounded flex p-4 hover:bg-black hover:text-white gap-4 text-body-medium ${pathname === link.url ? "text-white bg-black" : "text-grey"
                }`}
              onClick={() => link.children ? toggleItem(link.label) : null}
              href={link.url}
            >
              {createElement(link.icon)}
              <p>{link.label}</p>
            </Link>
            {link.children && openItems[link.label] && (
              <div className="pl-8 flex flex-col gap-2">
                {link.children.map((child) => (
                  <Link
                    href={child.url}
                    key={child.label}
                    className={`rounded flex p-4 hover:bg-black gap-4 text-body-medium ${pathname === child.url ? "bg-black" : ""
                      }`}
                  >
                    {createElement(child.icon)}
                    <p>{child.label}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
