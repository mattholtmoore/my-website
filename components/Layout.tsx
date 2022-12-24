import { Container } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container>
        <Header /> {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
