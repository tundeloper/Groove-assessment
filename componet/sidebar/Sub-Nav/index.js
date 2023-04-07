import { List } from "./list";
import {
  LabIcon,
  LikedIcon,
  CreatePlayListIcon,
  SpeakerIcon,
} from "../../../public/svg";

export const SubNav = () => {
  return (
    <List
      lib={<LabIcon />}
      liked={<LikedIcon />}
      rec={<SpeakerIcon />}
      create={<CreatePlayListIcon />}
    />
  );
};
