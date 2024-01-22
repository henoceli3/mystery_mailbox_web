import Utiles from "@/utiles";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

const NavBar = () => {
  const utiles = new Utiles();
  const router = useRouter();
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      //   bg={"white"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "normal", md: "space-around" }}
      alignItems={"center"}
      fontWeight={"bold"}
    >
      <Fade direction="up" triggerOnce={true}>
        <Text mt={{ base: "5%", md: "0" }} cursor={"pointer"}>
          A propos
        </Text>
        <Text mt={{ base: "5%", md: "0" }} cursor={"pointer"}>
          {"Condition d'utilisation"}
        </Text>
        <Text mt={{ base: "5%", md: "0" }} cursor={"pointer"}>
          FAQ
        </Text>
        <Text mt={{ base: "5%", md: "0" }} cursor={"pointer"}>
          Contact
        </Text>
      </Fade>

      <Button
        className="download-button"
        mt={{ base: "5%", md: "0" }}
        position={"relative"}
        transition={"0.5s"}
        zIndex={1}
        overflow={"hidden"}
        onClick={() => {
          router.push("/mobileapp");
        }}
      >
        Telecharger
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Button>
    </Flex>
  );
};

export default NavBar;
