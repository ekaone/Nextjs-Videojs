import React from "react";
import { Box } from "@chakra-ui/core";
// components
import Header from "./Header";

function Layout(props) {
  const { children } = props;

  return (
    <Box maxWidth="1200px" mx="auto">
      <Header />

      <main>{children}</main>
      <footer>Footer</footer>
    </Box>
  );
}

export default Layout;
