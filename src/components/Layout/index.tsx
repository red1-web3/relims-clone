import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={poppins.className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
