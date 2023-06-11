import styles from "./MyButton.module.sass";
import { useEffect, useState } from "react";

const MyBtn = ({
  setShoppingBag,
  book,
  shoppingBag,
  category,
  books,
  bookById,
}) => {
  console.log(books);
  console.log(book);
  const [buyBtn, setbuyBtn] = useState("BUY NOW");
  const [stylesBtn, setStylesBtn] = useState(styles.buyBtn);

  useEffect(() => {
    shoppingBag.forEach((e) => {
      //  ;
      // if (e.id === book.id) {
      //   setStylesBtn(styles.buyBtnActive);
      //   setbuyBtn("in the cart");
      // } else {
      //   setStylesBtn(styles.buyBtn);
      //   setbuyBtn("BUY NOW");
      // }
      for (let i = 0; i < shoppingBag.length; i++) {
        debugger;
        if (bookById) {
          if (shoppingBag[i].id === bookById.id) {
            debugger;
            setStylesBtn(styles.buyBtnActive);
            setbuyBtn("in the cart");
            break;
          } else {
            debugger;
            setStylesBtn(styles.buyBtn);
            setbuyBtn("BUY NOW");
          }
        } else {
          if (shoppingBag[i].id === book?.id) {
            setStylesBtn(styles.buyBtnActive);
            setbuyBtn("in the cart");
            break;
          } else {
            setStylesBtn(styles.buyBtn);
            setbuyBtn("BUY NOW");
          }
        }
      }
    });
  }, [books, category, bookById]);
  return (
    <button
      onClick={() => {
        if (buyBtn === "in the cart") {
          if (book === undefined) {
            setbuyBtn("BUY NOW");
            setShoppingBag((prev) => prev.filter((e) => e?.id !== bookById.id));

            setStylesBtn(styles.buyBtn);
          } else {
            setbuyBtn("BUY NOW");
            console.log(shoppingBag);
            setShoppingBag((prev) => prev.filter((e) => e?.id !== book.id));

            setStylesBtn(styles.buyBtn);
          }
        } else {
          if (book === undefined) {
            setShoppingBag((prev) => [...prev, bookById]);
            setbuyBtn("in the cart");
            setStylesBtn(styles.buyBtnActive);
          } else {
            setbuyBtn("in the cart");
            setShoppingBag((prev) => [...prev, book]);

            setStylesBtn(styles.buyBtnActive);
          }
        }
      }}
      className={stylesBtn}
    >
      {buyBtn}
    </button>
  );
};

export default MyBtn;
