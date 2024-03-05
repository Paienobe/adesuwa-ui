import styles from "./Navbar.module.scss";
import logo from "../../assets/ADESUWA (2).svg";
import SearchBar from "../SearchBar/SearchBar";
import SolidButton from "../SolidButton/SolidButton";
import { LiaUserCheckSolid } from "react-icons/lia";
import { GoChevronDown } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import { navRoutes } from "../../constants/routes";
import { useCustomerContext } from "../../context/CustomerContext/CustomerContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { queryText, setQueryText } = useGlobalContext();
  const { customer } = useCustomerContext();

  const handleQueryInput = (query: string) => {
    setQueryText(query);
  };

  const handleSearch = () => {
    queryText && navigate("/catalog");
  };

  const location = useLocation();
  const path = String(location.pathname.substring(1));
  const showNavbar = navRoutes[path];

  return (
    <nav
      className={styles.navbar}
      style={{ display: showNavbar ? "unset" : "none" }}
    >
      <section>
        <img src={logo} alt="" />

        <div>
          <SearchBar
            placeholder="Search products"
            queryHandler={handleQueryInput}
          />
          <SolidButton text="SEARCH" onClick={handleSearch} />
        </div>

        <div>
          <button className={styles.navbar__profile_btn}>
            <LiaUserCheckSolid size={20} />
            {customer?.first_name}
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
