import { UduXIcon } from "../../../public/svg";
import classes from "./index.module.css";

export const HeroImage = () => {
  return (
    <div className={classes.img}>
      <UduXIcon />
      <img src="/om" alt="omah lay" />
    </div>
  );
};
