import classes from "./index.module.css";
import Image from "next/image";

export const PlaylistCard = ({ data }) => {
  return (
    <div className={classes.card_list}>
      <div className={classes.playlist_cover} style={{ position: "relative" }}>
        <div className={classes.back_drop}>
          <div style={{ background: data.backDrop }}></div>
          <div style={{ background: data.backDrop }}></div>
        </div>
        <div className={classes.card_img}>
          <div>
            <img src={data.imageUrl} alt="playlist cover" />
            {/* <Image
              src={data.imageUrl}
              alt="playlist cover"
              width={160.86}
              height={140.86}
            /> */}
          </div>
        </div>
      </div>
      <div
        style={{ background: data.background }}
        className={classes.card_descripition}
      >
        <div className={classes.tittle}>{data.tittle}</div>
        <div className={classes.desc}>{data.description}</div>
      </div>
    </div>
  );
};
