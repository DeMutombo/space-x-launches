import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navigation";

const Layout = ({ children }: any) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
