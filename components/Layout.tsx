import { Container } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollButton from "./ScrollButton";

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
