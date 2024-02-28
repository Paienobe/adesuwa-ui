import styles from "./Navbar.module.scss";
import logo from "../../assets/ADESUWA (2).svg";
import SearchBar from "../SearchBar/SearchBar";
import SolidButton from "../SolidButton/SolidButton";
import { LiaUserCheckSolid } from "react-icons/lia";
import { GoChevronDown } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [queryText, setQueryText] = useState("");

  const handleQuery = (query: string) => {
    setQueryText(query);
    console.log(query);
  };

  const location = useLocation();
  const showNavbar = location.pathname.includes("/shop");
  return (
    <nav
      className={styles.navbar}
      style={{ display: showNavbar ? "unset" : "none" }}
    >
      <section>
        <img src={logo} alt="" />

        <div>
          <SearchBar placeholder="Search products" queryHandler={handleQuery} />
          <SolidButton text="SEARCH" />
        </div>

        <div>
          <button className={styles.navbar__profile_btn}>
            <LiaUserCheckSolid size={20} />
            Progress
            <GoChevronDown />
          </button>

          <button className={styles.navbar__cart_btn}>
            <HiOutlineShoppingCart size={20} />
            Cart
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
