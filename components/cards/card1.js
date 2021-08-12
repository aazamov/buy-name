import Link from "next/link";
import classes from "./card1.module.css";

function Card1() {
  return (
    <div className={classes.cards}>
      <div className={classes["text"]}>
        <h2>Sport Cars.</h2>
      </div>

      <div className={classes.cards__}>
        <div className={classes.card}>
          <div className={classes.img1}></div>
          <div className={classes["card__text"]}>
            <h2>FERRARI SF90</h2>
            <h4>Engine: V8, 4.0 L, 1000 Ps, 800 Nm</h4>
            <p>
              0-100 (km/h): 2.5 s <br />
              0-200 (km/h): 6.7 s<br />
              Top Speed: 340 km/h
              <br />
              Price: $648.550
              <br />
            </p>
            <Link href="/ferrari">
              <button>Buy</button>
            </Link>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.img2}></div>
          <div className={classes["card__text"]}>
            <h2>AVENTADOR SVJ </h2>
            <h4>Engine: V12, 6.5 L, 770 Ps, 720 Nm</h4>
            <p>
              0-100 (km/h): 2.8 s <br />
              0-200 (km/h): 8.6 s<br />
              Top Speed: 350 km/h
              <br />
              Price: $463.978 <br />
            </p>
            <Link href="/aventador">
              <button>Buy</button>
            </Link>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.img3}></div>

          <div className={classes["card__text"]}>
            <h2>Mercedes-AMG GTR </h2>
            <h4>Engine: V8, 4.0 L, 639 Hp, 900 Nm</h4>
            <p>
              0-100 (km/h): 3.2 s <br />
              0-200 (km/h): 9.4 s<br />
              Top Speed: 345 km/h
              <br />
              Price: $268.000
            </p>
            <Link href="/mers">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
