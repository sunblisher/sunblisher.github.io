import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
