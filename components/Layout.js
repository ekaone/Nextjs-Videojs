import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/core";
// components
import Header from "./Header";

function Layout(props) {
  const { children } = props;

  return (
    <Box maxWidth="1200px" mx="auto">
      <Header />

      <main>{children}</main>
      <Box
        as="footer"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt="40px"
      >
        <Link href="https://videojs.com/">Video JS</Link>
      </Box>
    </Box>
  );
}

export default Layout;
