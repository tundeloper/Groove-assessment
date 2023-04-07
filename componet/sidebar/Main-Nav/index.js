// import classes from "./index.module.css";
import NavList from "./NavList";
import { Discovers, Home } from "../../../public/svg";
export const Nav = () => {
  return <NavList home={<Home />} discover={<Discovers />} />;
};
