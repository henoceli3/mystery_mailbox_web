import {
  Button,
  Center,
  Circle,
  CircularProgress,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface MessageBoxProps {
  userName: string;
  message: string;
  isLoading: boolean;
  _sendMessage: () => void;
  handleInputChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const MessageBox = ({
  userName,
  message,
  isLoading,
  _sendMessage,
  handleInputChange,
}: MessageBoxProps) => {
  return (
    <>
      {/* container du titre et du textarea et du button envoyer */}
      <Flex
        h={"50%"}
        w={{
          base: "95%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          "2xl": "40%",
        }}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* container du titre et du textarea h([60+5] = [65])*/}
        <Center
          w={"100%"}
          h={{ base: "60%", sm: "60%", md: "70%", lg: "75%", xl: "60%" }}
          borderRadius={"10px"}
          mt={{ base: "5%", sm: "5%", md: "2.5%", lg: "2.5%", xl: "5%" }}
          flexDirection={"column"}
          //   bg={'gray'}
        >
          {/* container du titre */}
          <Flex
            direction={"row"}
            bg={"#ffffff"}
            w={"100%"}
            h={"30%"}
            borderTopRightRadius={"30px"}
            borderTopLeftRadius={"30px"}
          >
            {/* container du avatar et du pseudo */}
            <Center w={"15%"} h={"100%"}>
              <Circle size="40px" bg="tomato" color="white"></Circle>
            </Center>
            {/* container detail du pseudo */}
            <Flex
              w={"85%"}
              h={"100%"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text color={"black"}>@{userName}</Text>
              <Text color={"black"} fontWeight={"bold"}>
                envoie-moi un message anonyme
              </Text>
            </Flex>
          </Flex>

          {/*container du Textarea */}
          <Center
            bg={"rgba(255,255,255,0.4)"}
            w={"100%"}
            h={"70%"}
            borderBottomRightRadius={"30px"}
            borderBottomLeftRadius={"30px"}
          >
            <Textarea
              value={message}
              onChange={handleInputChange}
              placeholder="Envoie-moi un message anonyme !"
              _placeholder={{
                color: "#00000040",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
              size="sm"
              w={"80%"}
              h={"80%"}
              color={"black"}
              bg={"transparent"}
              border={"none"}
              outline={"none"}
              focusBorderColor="transparent"
              resize={"none"}
              boxSizing="border-box"
            />
          </Center>
        </Center>
        {message ? (
          <Button
            w={"100%"}
            h={"15%"}
            bg={"black"}
            color={"white"}
            fontWeight={"bold"}
            borderRadius={"30px"}
            className="pulse button"
            onClick={_sendMessage}
          >
            {isLoading ? (
              <CircularProgress
                isIndeterminate
                color="white"
                size="40px"
                thickness={"10px"}
              />
            ) : (
              "Envoyer !"
            )}
          </Button>
        ) : null}
      </Flex>
    </>
  );
};

export default MessageBox;
