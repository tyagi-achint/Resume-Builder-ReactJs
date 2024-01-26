import React from "react";
import Footer from "./Footer";
import "./style.css";
import { Outlet } from "react-router-dom";
import Pagefeed from "./Pagefeed";

export default function Layout() {
  const linkTarget = "_blank";

  return (
    <>
      <Pagefeed />
      <Outlet />
      <Footer target={linkTarget} />
    </>
  );
}
