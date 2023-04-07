import { List } from "./list";
import classes from "./index.module.css";
import { PlayListIcon, SearchIcon } from "../../../public/svg";

export const Playlist = () => {
  return (
    <>
      <div className={classes.playlist}>
        <div>
          <span>
            <PlayListIcon />
          </span>
          Playlist
        </div>
        <SearchIcon />
      </div>
      <List />
    </>
  );
};
