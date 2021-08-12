import classes from "./header.module.css";

function Header(props) {
  return (
    <div className={classes.header__img} onClose={props.setHideCard}>
      <h1>Buy cars reliable</h1>
      <h3> Only new cars and cheaper than other </h3>
    </div>
  );
}

export default Header;
