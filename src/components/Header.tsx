"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="relative">
      <Navbar
        // shouldHideOnScroll
        className="w-full z-50 flex flex-row justify-between bg-slate-950/60 fixed backdrop-blur-md text-slate-100 shadow-md px-4 sm:px-6 lg:px-8"
      >
        <NavbarContent className="flex items-center gap-3 ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-slate-100 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <NavbarBrand>
            <img
              src="/NeuroNestLogoLight.png"
              alt="NeuroNest Logo"
              className="w-36 p-2"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-6 ml-auto mr-6"
          justify="center"
        >
          <NavbarItem>
            <Link
              href="/"
              className="text-sm font-medium transition-colors duration-300 text-slate-300 hover:text-white"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/"
              className="text-sm font-medium transition-colors duration-300 text-slate-300 hover:text-white"
            >
              ChatAI
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/"
              className="text-sm font-medium transition-colors duration-300 text-slate-300 hover:text-white"
            >
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-sm text-slate-300 hover:text-white">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              color="primary"
              variant="flat"
              className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {isMenuOpen && (
        <div
          className="fixed z-50 top-14 w-full bg-slate-950/60 backdrop-blur-md shadow-lg py-5 px-6 space-y-3 transition-all duration-300"
          style={{
            animation: `dropIn 0.5s ease-out forwards`,
          }}
        >
          <Link
            href="/"
            className="block text-base font-medium transition-colors text-slate-300 hover:text-red-500"
          >
            Home
          </Link>
          <Link
            href="/"
            className="block text-base font-medium transition-colors text-slate-300 hover:text-white"
          >
            ChatAI
          </Link>
          <Link
            href="/"
            className="block text-base font-medium transition-colors text-slate-300 hover:text-white"
          >
            About
          </Link>
          <Link
            href="#"
            className="block text-base font-medium transition-colors text-slate-300 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="#"
            className="block text-base font-medium transition-colors text-green-500 hover:text-green-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
