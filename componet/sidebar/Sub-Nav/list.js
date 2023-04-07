import Link from "next/link";
import classes from "./list.module.css";
export const List = ({ lib, liked, rec, create }) => {
  const lab = [
    { id: "c1", title: "Your Library", svg: lib },
    { id: "c2", title: "Liked Songs", svg: liked },
    { id: "c3", title: "Recent Played", svg: rec },
    { id: "c4", title: "Create Playlist", svg: create },
  ];

  return (
    <ul className={classes.ul}>
      {lab.map((lab) => (
        <li key={lab.id} className={classes.li}>
          <Link href={"/"}>
            {lab.svg}
            {lab.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
