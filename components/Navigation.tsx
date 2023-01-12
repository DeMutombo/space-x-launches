import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-6 fixed font-medium w-full mx-auto">
      <div className="container flex justify-between">
        <div>
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="flex gap-5">
          <Link href={"/about"}>About</Link>
          <Link href={"/launches"}>Launches</Link>
          <Link href={"/contact-us"}>Contact us</Link>
        </div>
        <div>Login</div>
      </div>
    </nav>
  );
};
