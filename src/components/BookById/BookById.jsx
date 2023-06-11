import Header from "../Header/Header";
import { getAllBussinessBooks } from "../API/API";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../../AppRouter";
import MyBtn from "../MyButton/MyButton";
import styles from "../BooksByCategories/BooksByCategories.module.sass";
import styles2 from "./BookById.module.sass";
const BookById = () => {
  const { category, setCategory, shoppingBag, setShoppingBag } =
    useContext(MainContext);
  const params = useParams();

  const [bookById, setBookById] = useState();

  useEffect(() => {
    getAllBussinessBooks(category).then((data) => {
      const response = data.items;
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === params.id) {
          setBookById(response[i]);
          console.log(bookById);

          break;
        }
      }
    });
  }, [category]);

  return (
    <div>
      <Header />
      <div className={styles2.mainDiv}>
        <img
          className={styles2.image}
          src={bookById?.volumeInfo.imageLinks.thumbnail}
          alt=""
        />

        <div className={styles.aboutDesc}>
          <div className={styles2.author}>{bookById?.volumeInfo.authors}</div>
          <div className={styles2.title}>{bookById?.volumeInfo.title}</div>
          <div className>
            {5}
            {5}
            <p className={styles.countReview}>{5} review</p>
            <div className={styles2.description}>
              {bookById?.volumeInfo.description}
            </div>
            <div className={styles.price}>$ {5}</div>
            <MyBtn
              className={styles.buyBtn}
              setShoppingBag={setShoppingBag}
              shoppingBag={shoppingBag}
              category={category}
              bookById={bookById}
            ></MyBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookById;
