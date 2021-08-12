import classes from "../styles/card.module.css";
import Navbar from "../components/navbar/navbar";
import Rec from "../components/rec/rec";
import Link from "next/link";
import { Fragment } from "react";

function Bmw() {
  return (
    <Fragment>
      <div>
        <Navbar />
        <div className={classes.bmw}>
          <div className={classes.img}>
            <div className={classes.image}></div>
          </div>
          <div className={classes["text"]}>
            <h1>Bmw</h1>
            <h4>The BMW M5 Competition model was introduced in August 2018</h4>
            <p>
              The BMW M5 Competition model was introduced in August 2018, with
              power increased to 617 hp at 6,000 rpm and torque remaining
              unchanged at 750 Nm ( between 1,800 and 5,800 rpm. The official
              zero to 100 km/h acceleration time was reduced by 0.1 seconds
              compared with the regular M5 meaning zero to 100 km/h (62 mph)
              takes 3.1 seconds in accordance with BMW.
            </p>
            <div>
              <h3>$134999.99</h3>
              <Link href="/">
                <button>Buy</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Rec></Rec>
    </Fragment>
  );
}

export default Bmw;
