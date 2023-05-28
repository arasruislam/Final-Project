import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Header/NavBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <>
      {noHeaderFooter || <NavBar />}
      <div className="min-h-[calc(100vh-230px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </>
  );
};

export default Main;
