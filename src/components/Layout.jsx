import React from "react";
import Footer from "./Footer";
import "./style.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const linkTarget = "_blank";

  return (
    <>
      <Outlet />
      <Footer target={linkTarget} />
    </>
  );
}
