import classes from "./index.module.css";
import { Forward, Prev, SearchIcon } from "../../public/svg";
import { Search } from "./SearchFild";
import { Imagemusic } from "./Image view/Index";
import { Cardlist } from "./card/cardlist";

export const Content = ({ data }) => {
  return (
    <div className={classes.content}>
      <Search prev={<Prev />} forw={<Forward />} search={<SearchIcon />} />
      <div className={classes.card}>
        <Imagemusic />
        <Cardlist listData={data.name} />
      </div>
    </div>
  );
};
