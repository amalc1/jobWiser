import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { io } from "socket.io-client";
import ChatList from "../../components/user/Chat/ChatList";
import FeedNav from "../../components/user/FeedNav";
import ChatBox from "../../components/user/Chat/ChatBox";
import { getRequest } from "../../helper/HandleRequest";

const Messages = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recievedMessage, setRecievedMessage] = useState(null);
  const userId = JSON.parse(localStorage.getItem("userInfo"))._id;
  const socket = useRef();

  //add new user
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", userId);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [userId]);

  //sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  //receive message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log("data recieved in message.jsx", data);
      setRecievedMessage(data);
    });
  }, []);
  //check online Status
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== userId);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  //get chats
  useEffect(() => {
    getRequest(`/chat/${userId}`).then((res) => {
      if (res.success) {
        setChats(res.returnedValue);
      }
    });
  }, [userId]);

  return (
    <>
      <Box>
        <FeedNav />
        <Stack
          direction="row"
          mt={6}
          spacing={4}
          width="82%"
          sx={{ mx: "auto" }}
        >
          <ChatList
            chats={chats}
            setCurrentChat={setCurrentChat}
            checkOnlineStatus={checkOnlineStatus}
          />
          <ChatBox
            chat={currentChat}
            currentUser={userId}
            setSendMessage={setSendMessage}
            recievedMessage={recievedMessage}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Messages;
