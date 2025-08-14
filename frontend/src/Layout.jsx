import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }) => {
  function scrollToElementById(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <main className="index">
        <Header onSectionClick={scrollToElementById} />
        {children}
      </main>
      <Footer onSectionClick={scrollToElementById} />
    </>
  );
};

export default Layout;