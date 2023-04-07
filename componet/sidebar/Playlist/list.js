import classes from "./index.module.css";
export const List = () => {
  const list = [
    "Riffs $ Runs",
    "African Heat",
    "Gidi Night",
    "Running Out of Play list na...",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na...",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na...",
    "Saturday was a Good day",
  ];

  return (
    <ul className={classes.ul}>
      {list.map((list) => {
        return (
          <li key={Math.random()} className={classes.li}>
            {list}
          </li>
        );
      })}
    </ul>
  );
};
