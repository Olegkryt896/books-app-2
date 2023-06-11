import { useContext, useEffect, useState } from "react";
import { getAllBussinessBooks } from "../API/API";
import styles from "./BooksByCategories.module.sass";
import { getRandomRating } from "../API/API";
import { getRandomRatingCount } from "../API/API";
import { getRandomPrice } from "../API/API";
import CategoriesList from "../CategoriesList/CategoriesList";
import MyBtn from "../MyButton/MyButton";
import { MainContext } from "../../AppRouter";
import { useNavigate } from "react-router-dom";

let price;
let ratingCount;
let ratingActive = [];
let ratingInActive = [];
const BooksByCategories = () => {
  const [books, setBooks] = useState([]);
  // const [category, setCategory] = useState("Business");
  const [startIndex, setstartIndex] = useState(0);
  const { shoppingBag, setShoppingBag, category, setCategory } =
    useContext(MainContext);
  const navigate = useNavigate();

  console.log("СтартИНдекс", startIndex);
  useEffect(() => {
    getAllBussinessBooks(category, startIndex).then((data) => {
      if (startIndex > 0) {
        setBooks((prev) => [...prev, ...data.items]);
      } else {
        setBooks(data.items);
      }
      console.log(data);
      // price = getRandomPrice().toFixed(2);
      // ratingCount = Math.ceil(getRandomRatingCount());
      // const numberRatingForActive = Math.ceil(getRandomRating());

      // const numberRatingForInActive = 5 - numberRatingForActive;

      // for (let i = 0; i < numberRatingForActive; i++) {
      //   ratingActive.push("../public/rating/active_Star.svg");
      // }
      // for (let i = 0; i < numberRatingForInActive; i++) {
      //   ratingInActive.push("../public/rating/inactive_Star.svg");
      // }
    });
  }, [category, startIndex]);

  // useEffect(() => {
  //   price = getRandomPrice().toFixed(2);
  //   ratingCount = Math.ceil(getRandomRatingCount());
  //   const numberRatingForActive = Math.ceil(getRandomRating());

  //   const numberRatingForInActive = 5 - numberRatingForActive;

  //   for (let i = 0; i < numberRatingForActive; i++) {
  //     ratingActive.push("../public/rating/active_Star.svg");
  //   }
  //   for (let i = 0; i < numberRatingForInActive; i++) {
  //     ratingInActive.push("../public/rating/inactive_Star.svg");
  //   }
  // }, []);

  console.log("Книги с сервака", books);
  console.log("Товары в корзине", shoppingBag);
  return books ? (
    <>
      <CategoriesList
        category={category}
        setCategory={setCategory}
        setstartIndex={setstartIndex}
      />
      <div className={styles.booksBlock}>
        <ul className={styles.ulBooks}>
          {books.map((book, index) => {
            console.log("Пришли книги", books);
            return (
              <li className={styles.about}>
                <img
                  className={styles.image}
                  src={
                    book.volumeInfo.imageLinks.thumbnail
                      ? book.volumeInfo.imageLinks.thumbnail
                      : null
                  }
                  alt=""
                  onClick={() => navigate(`/main/${book.id}`)}
                />
                <div className={styles.aboutDesc}>
                  <div className={styles.author}>{book.volumeInfo.authors}</div>
                  <div className={styles.title}>{book.volumeInfo.title}</div>
                  <div className>
                    {ratingActive.map((img) => {
                      return <img src={img} alt="" />;
                    })}
                    {ratingInActive.map((img) => {
                      return <img src={img} alt="" />;
                    })}
                    <p className={styles.countReview}>{ratingCount} review</p>
                    <div className={styles.description}>
                      {book.volumeInfo.description}
                    </div>
                    <div className={styles.price}>$ {price}</div>
                    <MyBtn
                      className={styles.buyBtn}
                      key={index}
                      setShoppingBag={setShoppingBag}
                      shoppingBag={shoppingBag}
                      book={book}
                      category={category}
                      books={books}
                    ></MyBtn>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.divLoadMore}>
          <button
            onClick={() => setstartIndex((prev) => prev + 6)}
            className={styles.buyBtnLoad}
          >
            Load more
          </button>
        </div>
      </div>
    </>
  ) : null;
};

export default BooksByCategories;
