import Link from "next/link";
import classes from "./navbar.module.css";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [input, setInput] = useState("");
  let car = [
    { name: "Cullinan", link: "cullinan" },
    { name: "Aventador", link: "aventador" },
    { name: "Ferrari", link: "ferrari" },
    { name: "Bugatti", link: "buggati" },
    { name: "Phantom", link: "phantom" },
    { name: "Bmw", link: "bmw" },
    { name: "Bentaiga", link: "bentaiga" },
  ];

  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  const handelChange = (e) => {
    toggle ? setToggle(false) : setToggle(true);
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    car = car.filter((i) => {
      return i.name.toLowerCase().match(input);
    });
  }
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div>
      <div className={classes.navbar}>
        <Link href="/">
          <h1 className={classes["logo"]}>
            Buy<span>Car.</span>
          </h1>
        </Link>

        <ul className={classes.ullist}>
          <li className={classes.list}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className={classes.list}>
            <Link href="/exclusive">
              <a className={classes.for}>Exclusive for you </a>
            </Link>
          </li>
          <li className={classes.list}>
            <Link href="/login">
              <a>Contact Us </a>
            </Link>
          </li>
        </ul>
        <div>
          <input
            value={input}
            onClick={clickHandler}
            onChange={handelChange}
            className={classes.input}
            placeholder="Search Car"
            type="text"
          />
          <div ref={menuRef}>
            {toggle ? (
              <div className={classes.empty}>
                {car.map((player, index) => {
                  return (
                    <div key="">
                      <Link href={`/${player.link}`}>
                        <div key={index} className={classes.cars__for__search}>
                          <h1 className={classes.name__of__car}>
                            {player.name}
                          </h1>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={classes.full}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
