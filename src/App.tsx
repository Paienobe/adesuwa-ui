import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vendor from "./pages/Vendor/Vendor";
import { VendorProvider } from "./context/VendorContext/VendorContext";
import { RefreshContextProvider } from "./context/RefreshContext/RefreshContext";
import { CustomerProvider } from "./context/CustomerContext/CustomerContext";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop/Shop";
import Catalog from "./pages/Catalog/Catalog";
import { GlobalContextProvider } from "./context/GlobalContext/GlobalContext";

function App() {
  return (
    <>
      <Router>
        <GlobalContextProvider>
          <CustomerProvider>
            <VendorProvider>
              <RefreshContextProvider>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/auth"
                    element={<AuthContextProvider children={<Auth />} />}
                  />
                  <Route path="/vendor-dashboard" element={<Vendor />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/catalog" element={<Catalog />} />
                </Routes>
              </RefreshContextProvider>
            </VendorProvider>
          </CustomerProvider>
        </GlobalContextProvider>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
