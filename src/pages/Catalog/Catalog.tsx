import { useEffect } from "react";
import CatalogBody from "../../components/CatalogBody/CatalogBody";
import CatalogFilters from "../../components/CatalogFilters/CatalogFilters";
import { useGlobalContext } from "../../context/GlobalContext/GlobalContext";
import styles from "./Catalog.module.scss";

const Catalog = () => {
  const { queryText, setQueryText, setSearchParams, searchParams } =
    useGlobalContext();

  console.log(searchParams.get("query")!);

  useEffect(() => {
    if (!queryText) {
      setQueryText(searchParams.get("query")!);
    }
    setSearchParams({ query: queryText });
  }, [queryText]);

  return (
    <div className={styles.catalog}>
      <CatalogFilters />
      <CatalogBody />
    </div>
  );
};

export default Catalog;
