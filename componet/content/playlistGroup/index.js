import React from "react";
import { PlaylistCard } from "../playlistCard";
import classes from "./index.module.css";
export const PlaylistGroup = ({ playlists, title }) => {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div className={classes.card_list}>
        {playlists.map((pl, index) => (
          <PlaylistCard key={index} data={pl} />
        ))}
      </div>
    </div>
  );
};
