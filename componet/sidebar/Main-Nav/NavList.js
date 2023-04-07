import Link from "next/link";
import classes from "./NavList.module.css";

const NavList = ({ home, discover }) => {
  const links = [
    { title: "Home", svg: home },
    { title: "Discovers", svg: discover },
  ];

  return (
    <ul className={classes.ul}>
      {links.map((links) => (
        <li key={links.title} className={classes.li}>
          <Link href="/">
            <div className={classes.img}>{links.svg}</div>
            <span>{links.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
