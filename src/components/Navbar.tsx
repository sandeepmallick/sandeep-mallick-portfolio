"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
      timeoutRef.current = null;
    }, 2000); // 3 seconds delay before hiding
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-black/50 to-red-800/50 backdrop-blur-md w-[90%] text-white px-8 py-3 rounded-2xl shadow-xl flex items-center justify-between z-50">
      {/* Logo / Name */}
      <Link href="/" className="text-lg font-bold tracking-wide">
        Sandeep Mallick
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-medium relative">
        <Link href="/projects" className="hover:text-red-400 transition">
          Projects
        </Link>
        <Link href="/about" className="hover:text-red-400 transition">
          About
        </Link>

        {/* Let’s Connect Dropdown */}
        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            type="button"
            className="flex items-center gap-1 hover:text-red-400 transition ease-in"
            // aria-haspopup="true"
            // aria-expanded={showDropdown}
          >
            Let&apos;s Connect <ChevronDown size={16} />
          </button>
          {showDropdown && (
            <div
              className={`absolute top-full right-0 mt-2 w-40 bg-zinc-900/95 rounded-xl shadow-lg overflow-hidden z-50 ${
                showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            > 
              <a
                href="https://github.com/sandeepmallick"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-mallick-94b997317/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/sandeep.mallick.6532"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/hannsandeep/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                Instagram
              </a>
              
                <a
                  href="https://discord.com/channels/@me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-red-700 transition"
                >
                  Discord
                </a>
                <a
                  href="https://t.me/+P2vEI4SrOpxiNTU1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-red-700 transition"
                >
                  Telegram
                </a>

              <a
                href="https://tryhackme.com/p/ZTEX"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                THM
              </a>
              
              <a
                href="https://open.spotify.com/playlist/3KUE9F8AVUfGRdEn70TeYn"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                Spotify
              </a>
              
            </div>
          )}
        </div>

        <a
          href="/SANDEEP RESUME.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition"
        >
          <Download size={16} /> Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="Toggle menu"
      >
        {openDrawer ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {openDrawer && (
        <div className="absolute top-16 right-4 bg-zinc-900/95 px-6 py-4 rounded-xl shadow-lg space-y-4 flex flex-col font-medium md:hidden">
          <Link
            href="/projects"
            onClick={() => setOpenDrawer(false)}
            className="hover:text-red-400"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setOpenDrawer(false)}
            className="hover:text-red-400"
          >
            About
          </Link>
          <details className="group relative max-w-xs">
            <summary className="cursor-pointer flex items-center gap-1 list-none hover:text-red-400">
              Let&apos;s Connect
            </summary>
            <div className="ml-2 mt-2 space-y-1 pl-2 border-l border-red-500 transition-all">
                            <a
                href="https://github.com/sandeepmallick"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-mallick-94b997317/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/sandeep.mallick.6532"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/hannsandeep/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                Instagram
              </a>
              
                <a
                  href="https://discord.com/channels/@me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-red-700 transition"
                >
                  Discord
                </a>
                <a
                  href="https://t.me/+P2vEI4SrOpxiNTU1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-red-700 transition"
                >
                  Telegram
                </a>

              <a
                href="https://open.spotify.com/playlist/3KUE9F8AVUfGRdEn70TeYn"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-red-700 transition"
              >
                Spotify
              </a>
            </div>
          </details>

          <a
            href="/SANDEEP RESUME.pdf"
            download
            target="_blank"
            onClick={() => setOpenDrawer(false)}
            className="flex items-center gap-2 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};
