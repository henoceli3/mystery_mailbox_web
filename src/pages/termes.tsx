import AppBar from "@/components/app_bar";
import { Center, Flex, Text } from "@chakra-ui/react";

const TermesOfUse = () => {
  return (
    <Flex minH={"100vh"} w={"100vw"} flexDirection={"column"}>
      <AppBar />
      <Center h={"90vh"} w={"100%"}>
        <Text>Terme of use</Text>
      </Center>
    </Flex>
  );
};

export default TermesOfUse;
