import classes from "./index.module.css";
import { Forward, Prev, SearchIcon } from "../../public/svg";
import { Search } from "./SearchFild";
import { HeroImage, Imagemusic } from "./Image view/Index";
import { PlaylistGroup } from "./playlistGroup";
import { User } from "../sidebar/User/User";

export const Content = ({ data }) => {
  return (
    <div className={classes.content}>
      <div className={classes.user}>
        <User />
      </div>
      <Search prev={<Prev />} forw={<Forward />} search={<SearchIcon />} />
      <div className={classes.container}>
        <HeroImage />
        <div className={classes.playlists}>
          <PlaylistGroup title={"Welcome Back"} playlists={data} />
          <PlaylistGroup title={"Cheers to the Weekend"} playlists={data} />
        </div>
      </div>
    </div>
  );
};
