import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between">
        <div>
          <Link href={"/"}>Logo</Link>
        </div>
        <div>
          <Link href={"/about"}>About</Link>
          <Link href={"/History"}>History</Link>
        </div>
        <div>Login</div>
      </div>
    </nav>
  );
};
