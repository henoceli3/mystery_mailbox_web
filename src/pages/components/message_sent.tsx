import { Center, Flex, Text } from "@chakra-ui/react";
import {
  faCheckCircle,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface MessageSentProps {
  setIsSent: Dispatch<SetStateAction<boolean>>;
}

const MessageSent = ({ setIsSent }: MessageSentProps) => {
  return (
    <>
      <Flex
        h={"50%"}
        w={{ base: "95%", sm: "80%", md: "70%", lg: "60%", xl: "50%", "2xl": "40%" }}
        flexDirection={"column"}
      >
        <Flex h={"10%"} w={"100%"} mt={"2.5%"}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => setIsSent(false)}
            size="2x"
            style={{ cursor: "pointer", fontWeight: "bold" }}
            color="white"
          />
        </Flex>
        <Center h={"87.5%"} w={"100%"} flexDirection={"column"}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="10x"
            color="white"
            style={{ fontWeight: "bold", marginBottom: "5%" }}
          />
          <Text color="white" fontWeight={"bold"} fontSize={"2em"}>
            Envoyé !
          </Text>
        </Center>
      </Flex>
    </>
  );
};

export default MessageSent;
