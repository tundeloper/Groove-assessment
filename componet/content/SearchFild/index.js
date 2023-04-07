import classes from "./index.module.css";
export const Search = ({ prev, forw, search }) => {
  return (
    <div className={classes.search}>
      <div className={classes.nav}>
        <span>{prev}</span>
        <span>{forw}</span>
      </div>

      <form className={classes.form}>
        <div>
          <input type="text" className={classes.input} />
          <div className={classes.search_svg}>{search}</div>
        </div>
      </form>
    </div>
  );
};
