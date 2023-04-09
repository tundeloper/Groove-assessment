import classes from "./index.module.css";
export const Layout = ({ sidebar, content, mobileNav }) => {
  return (
    <>
      <div className={classes.layout}>
        {sidebar}
        {content}
      </div>
      {mobileNav}
    </>
  );
};
