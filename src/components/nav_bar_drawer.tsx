import Utiles from "@/utiles";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import NavBar from "./nav_bar";

const NavBarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const utile = new Utiles();
  return (
    <>
      <Icon as={HamburgerIcon} mr={"2em"} boxSize={"2em"} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bg={utile.getPrimaryColor()}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <NavBar/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBarDrawer;
