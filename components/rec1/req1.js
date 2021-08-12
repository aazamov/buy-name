import Card2 from "../cards/card2";
import classes from "./req1.module.css";

function Req1() {
  return (
    <div>
      <h1 className={classes.req}> You may also like</h1>
      <Card2 />
    </div>
  );
}

export default Req1;
