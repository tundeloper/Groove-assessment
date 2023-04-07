import classes from "./user.module.css";
import user from "../../../asset/User.png";
import Image from "next/image";
export const User = () => {
  return (
    <div className={classes.user}>
      <Image
        src={user}
        alt="user-image"
        height="62"
        width="62"
        className={classes.img}
        priority
      />
      <div>Hey! Babatunde</div>
    </div>
  );
};
