import { useState } from "react";
import styles from "./CategoriesList.module.sass";

const list = [
  "Architecture",
  "Art & Fashion",
  "Biography",
  "Business",
  "Crafts & Hobbies",
  "Drama",
  "Fiction",
  "Food & Drink",
  "Health & Wellbeing",
  "History & Politics",
  "Humor",
  "Poetry",
  "Psychology",
  "Science",
  "Technology",
  "Travel & Maps",
];

const CategoriesList = ({ category, setCategory, setstartIndex }) => {
  return (
    <>
      <div className={styles.div} />
      <ul className={styles.ulList}>
        {list.map((cat) => {
          if (cat === category) {
            return (
              <div className={styles.divActiveCategory}>
                <img src="../public/categories/Ellipse 3.svg" alt="" />
                <li
                  onClick={() => setCategory(cat)}
                  className={styles.listItemActive}
                >
                  {cat}
                </li>
              </div>
            );
          }
          return (
            <li
              onClick={() => {
                setCategory(cat);
                setstartIndex(0);
              }}
              set
              className={styles.listItem}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesList;
