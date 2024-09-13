import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import Grid from "@mui/material/Grid2";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat");
    };
    return (
      <div style={{ height: "100vh", overflowY: "hidden" }}>
        <Title />
        <Header />
        <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            size={{ sm: 4, md: 3 }}
            sx={{
              display: { xs: "none", sm: "block" },
              height: "100%",
              overflowY: "auto",
            }}
          >
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              // newMessagesAlert={[
              //   {
              //     chatId,
              //     count: 4,
              //   },
              // ]}
              // onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 8, md: 5, lg: 6 }} sx={{ height: "100%" }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            size={{ md: 4, lg: 3 }}
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
              padding: "2rem",
              backgroundColor: "black",
            }}
          >
            <Profile />
          </Grid>
        </Grid>

        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
