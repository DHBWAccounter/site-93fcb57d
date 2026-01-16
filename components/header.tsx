"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; external?: boolean }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "News",
    children: [
      { label: "News", href: "/bitcoin-association-switzerland" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Roadshow 2025", href: "/roadshow-2025" },
      { label: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { label: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { label: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { label: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { label: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    label: "membership",
    children: [
      { label: "Private", href: "/private" },
      { label: "Corporate", href: "/corporate" },
      { label: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    label: "Participate",
    children: [
      { label: "Meetups & Events", href: "/meetups-events" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About", href: "/about-1" },
      { label: "Board", href: "/board" },
      { label: "Finances", href: "/finances" },
      { label: "Statutes", href: "/statutes" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Contact", href: "/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-1"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                    )}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        rel={child.external ? "noopener noreferrer" : undefined}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === item.label && item.children && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-500"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}