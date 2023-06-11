import styles from "./Header.module.sass";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../AppRouter";
const categories = ["books", "audiobooks", "Stationery & gifts", "blog"];
const info = [
  "../public/header/profile.svg",
  "../public/header/search.svg",
  "../public/header/shop bag.svg",
];
const Header = () => {
  const { shoppingBag, setShoppingBag } = useContext(MainContext);
  return (
    <div className={styles.header}>
      <Link to="/main" className={styles.logo}>
        Bookshop
      </Link>
      <ul className={styles.ulCat}>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
      <ul className={styles.ulInfo}>
        {info.map((icon, index) => (
          <img className={styles.infoImg} key={index} src={icon} />
        ))}
        <div className={shoppingBag.length ? styles.numberBuy : ""}>
          {shoppingBag.length ? shoppingBag.length : ""}
        </div>
      </ul>
    </div>
  );
};

export default Header;
