import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-screen relative">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;