import classes from "./index.module.css";
import { User } from "./User/User";
import { Nav } from "./Main-Nav";
import { SubNav } from "./Sub-Nav";
import { Playlist } from "./Playlist";
export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <User />
      <Nav />
      <SubNav />
      <Playlist />
    </div>
  );
};
