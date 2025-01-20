import React from "react";
import Link from "next/link";

const SmallNav = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/your-shed"}>Dashboard</Link>
    </div>
  );
};

export default SmallNav;
