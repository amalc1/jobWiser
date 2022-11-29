import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import Feed from "../../components/user/Feed";
import FeedNav from "../../components/user/FeedNav";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import { GlobalContext } from "../../Context/Global";

const UserFeed = () => {
  const { loggedUser } = useContext(GlobalContext);
  return (
    <>
      <Box>
        <FeedNav />
        <Stack
          direction="row"
          spacing={2}
          width="90%"
          sx={{ mx: "auto" }}
          // justifyContent="space-between"
        >
          <Sidebar/>
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
};

export default UserFeed;
