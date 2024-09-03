import React from "react";
import { Container } from "@mui/material";
import SidebarMenu from "../sidebarMenu/SidebarMenu";

const Layout = ({ children }) => {
  return (
    <Container>
      <SidebarMenu children={children} />
    </Container>
  );
};

export default Layout;
