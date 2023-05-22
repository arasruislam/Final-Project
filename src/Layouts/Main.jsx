import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Header/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100vh-230px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
