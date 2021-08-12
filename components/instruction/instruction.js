import { useState } from "react";
import classes from "./instruction.module.css";

function Instruction() {
  const [showText, setShowText] = useState(false);

  const clickHandler = () => {
    showText ? setShowText(false) : setShowText(true);
  };

  return (
    <div className={classes["text"]}>
      <h1>Instruction</h1>
      <h2>Some advice for buying car</h2>
      <p>
        {`
        Buying a new car is a big step, but it doesn't have to be a daunting
        one. Here's how to research, locate, price and negotiate to buy your new
        car. Mobile technology makes these steps easier than ever. It is now
        entirely possible for a buyer to shop for a vehicle while in line at the
        supermarket or waiting to pick up the kids. A preapproved auto loan
        starts you out on the right foot. You get an idea of how much you can
        afford, and you'll have an interest rate that you can then compare to
        the dealership's financing, which might actually offer the lowest annual
        percentage rate. Look for a loan application on the mobile web pages of
        your bank, credit union, or other lenders such as Capital One or
        Nationwide. It's a good idea to do your own research on which lender
        will work best for you.`}
        <div className={classes.hidden}>
          {showText ? (
            <p>
              {`
              Buying a new car is a big step, but it doesn't have to be a
              daunting one. Here's how to research, locate, price and negotiate
              to buy your new car. Mobile technology makes these steps easier
              than ever. It is now entirely possible for a buyer to shop for a
              vehicle while in line at the supermarket or waiting to pick up the
              kids. A preapproved auto loan starts you out on the right foot.
              You get an idea of how much you can afford, and you'll have an
              interest rate that you can then compare to the dealership's
              financing, which might actually offer the lowest annual percentage
              rate. Look for a loan application on the mobile web pages of your
              bank, credit union, or other lenders such as Capital One or
              Nationwide. It's a good idea to do your own research on which
              lender will work best for you. Buying a new car is a big step, but
              it doesn't have to be a daunting one. Here's how to research,
              locate, price and negotiate to buy your new car. Mobile technology
              makes these steps easier than ever. It is now entirely possible
              for a buyer to shop for a vehicle while in line at the supermarket
              or waiting to pick up the kids. A preapproved auto loan starts you
              out on the right foot. You get an idea of how much you can afford,
              and you'll have an interest rate that you can then compare to the
              dealership's financing, which might actually offer the lowest
              annual percentage rate. Look for a loan application on the mobile
              web pages of your bank, credit union, or other lenders such as
              Capital One or Nationwide. It's a good idea to do your own
              research on which lender will work best for you.Buying a new car
              is a big step, but it doesn't have to be a daunting one. Here's
              how to research, locate, price and negotiate to buy your new car.
              Mobile technology makes these steps easier than ever. It is now
              entirely possible for a buyer to shop for a vehicle while in line
              at the supermarket or waiting to pick up the kids. A preapproved
              auto loan starts you out on the right foot. You get an idea of how
              much you can afford, and you'll have an interest rate that you can
              then compare to the dealership's financing, which might actually
              offer the lowest annual percentage rate. Look for a loan
              application on the mobile web pages of your bank, credit union, or
              other lenders such as Capital One or Nationwide. It's a good idea
              to do your own research on which lender will work best for you.`}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </p>
      <button onClick={clickHandler}>Learn More</button>
    </div>
  );
}

export default Instruction;
