import React from "react";
import classes from "./Burger.module.css";
import uuid from "react-uuid";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ({ ingredients }) => {
  const ingredientsArray = Object.keys(ingredients);
  const amountArray = Object.values(ingredients);

  // Check if there are any amounts of ingredients
  const sum = amountArray.some((amount) => amount > 0);

  const amountIngrArr = amountArray.map((num, i) => {
    return new Array(num).fill(ingredientsArray[i]);
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {!sum ? (
        <p>Start adding ingredients</p>
      ) : (
        amountIngrArr.map((ingredient) =>
          ingredient.map((ing) => <BurgerIngredient key={uuid()} type={ing} />)
        )
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
