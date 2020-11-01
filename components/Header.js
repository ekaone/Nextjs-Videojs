import React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/core";
import { FaGithub, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
    >
      <Link href="https://github.com/ekaone/Nextjs-Videojs">
        <FaGithub style={{ color: "#2D3748", fontSize: "25px" }} />
      </Link>
    </Box>
  );
}

export default Header;
