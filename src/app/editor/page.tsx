"use client";

import Header from "@/components/layout/Header";
import {Box, IconButton} from "@chakra-ui/react";
import {IconBase} from "react-icons";
import {LuStepBack} from "react-icons/lu";

export default function Page() {
  return (
    <>
      <Box w={"full"} p={"20px 40px"}>
        <IconButton
          bg="bs.white"
          color="bs.black"
          _hover={{ bg: "bs.gray.100" }}
          aria-label="menu"
          onClick={()=>{}}
        >
          <LuStepBack />
        </IconButton>
      </Box>
    </>
  )
}
