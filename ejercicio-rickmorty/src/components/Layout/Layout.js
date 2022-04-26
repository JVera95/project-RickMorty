import DarkMode from "../../contexts/darkMode";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Layout() {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={darkMode ? "container bg-white" : "container bg-dark"}>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}
