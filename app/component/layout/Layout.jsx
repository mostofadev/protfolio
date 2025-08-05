import Footer from "../banner/footer";
import Menu from "../header/menu";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
