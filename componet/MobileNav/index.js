import { Home, LabIcon, Discovers, SpeakerIcon } from "../../public/svg";
import classes from "./index.module.css";
export const MobileNav = () => {
  return (
    <div className={classes.mobile}>
      <div>
        <Home />
      </div>
      <div>
        <Discovers />
      </div>
      <div>
        <SpeakerIcon />
      </div>
      <div>
        <LabIcon />
      </div>
    </div>
  );
};
