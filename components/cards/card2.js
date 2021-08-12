import Link from "next/link";
import classes from "./card2.module.css";

function Card2() {
  return (
    <div className={classes.cards}>
      <div className={classes["text"]}>
        <h2>Comfort Cars.</h2>
      </div>

      <div className={classes.cards__}>
        <div className={classes.card}>
          <div className={classes.img1}></div>
          <div className={classes["card__text"]}>
            <h2>Rolls Royce Phantom </h2>
            <h4>Engine: V12, 6.75 L, 610 Ps, 950 Nm</h4>
            <p>
              0-100 (km/h): 5.5 s <br />
              0-200 (km/h): 11 s<br />
              Top Speed: 260 km/h
              <br />
              Price: $671.550
              <br />
            </p>
            <Link href="/phantom">
              <button>Buy</button>
            </Link>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.img2}></div>
          <div className={classes["card__text"]}>
            <h2>Bentley Bentayga </h2>
            <h4>Engine: V8, 4.0 L, 550 Ps, 770 Nm</h4>
            <p>
              0-100 (km/h): 4.5 s <br />
              0-200 (km/h): 12.2 s<br />
              Top Speed: 290 km/h
              <br />
              Price: $216.000
              <br />
            </p>
            <Link href="/bentaiga">
              <button>Buy</button>
            </Link>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.img3}></div>

          <div className={classes["card__text"]}>
            <h2>Rolls Royce Cullinan </h2>
            <h4>Engine: V12, 6.75 L, 571 Hp, 850 Nm</h4>
            <p>
              0-100 (km/h): 5.2 s <br />
              0-200 (km/h): 10.6 s<br />
              Top Speed: 250 km/h
              <br />
              Price: €600.000
              <br />
            </p>
            <Link href="/cullinan">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
