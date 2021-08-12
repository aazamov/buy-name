import classes from "./req.module.css";
import Card1 from "../cards/card1";

function Rec() {
  return (
    <div>
      <h1 className={classes.req}>You may also like</h1>
      <Card1 />
    </div>
  );
}

export default Rec;
