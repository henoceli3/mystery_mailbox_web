import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Center,
  Flex,
  HStack,
  Icon,
  Img,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import NavBarDrawer from "./nav_bar_drawer";
import NavBar from "./nav_bar";
import { useRouter } from "next/router";

const AppBar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const router = useRouter();

  return (
    <>
      <Flex h={"10vh"} w={"100%"} justifyContent={"space-between"}>
        {/* le logo  */}
        <Center
          h={"100%"}
          w={{ base: "20%", sm: "15%", xl: "10%", "2xl": "8%" }}
        >
          <Img
            src="/logo.png"
            alt="logo"
            style={{ height: "90%", width: "90%" }}
            onClick={() => {
              router.push("/");
            }}
          />
        </Center>
        {/* la navBar */}
        <HStack
          h={"100%"}
          w={{ base: "70%", sm: "75%", xl: "80%", "2xl": "82%" }}
          justifyContent={isLargerThan768 ? "space-around" : "flex-end"}
          alignItems={"center"}
        >
          {isLargerThan768 ? <NavBar /> : <NavBarDrawer />}
        </HStack>
      </Flex>
    </>
  );
};

export default AppBar;
