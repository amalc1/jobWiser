import React from "react";
import { Box, Stack } from "@mui/material";
import Feed from "../../components/user/Feed";
import FeedNav from "../../components/user/FeedNav";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";

const UserFeed = () => {
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
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
};

export default UserFeed;
