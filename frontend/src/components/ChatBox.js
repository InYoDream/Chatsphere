import React, {useContext} from 'react';

import { Box } from "@chakra-ui/layout";
//import "./styles.css";
import SingleChat from "./SingleChat";
import ChatContext from '../Context/chat-context';

const Chatbox = ({ fetchAgain, setFetchAgain }) => {

  const { selectedChat } = useContext(ChatContext);

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="#222244"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      color="white"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
