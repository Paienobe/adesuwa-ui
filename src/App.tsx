import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vendor from "./pages/Vendor/Vendor";
import { VendorProvider } from "./context/VendorContext/VendorContext";

function App() {
  return (
    <>
      <Router>
        <VendorProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/auth"
              element={<AuthContextProvider children={<Auth />} />}
            />
            <Route path="/vendor-dashboard" element={<Vendor />} />
          </Routes>
        </VendorProvider>
      </Router>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
