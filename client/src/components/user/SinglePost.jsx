import { Box, Stack } from "@mui/material";
import React from "react";
import FeedNav from "./FeedNav";
import Rightbar from "../../components/user/Rightbar";
import Sidebar from "../../components/user/Sidebar";
import Feed from "./Feed";

const SinglePost = () => {
  return (
    <>
      <Box>
        <FeedNav />
        <Stack direction="row" spacing={2} width="90%" sx={{ mx: "auto" }}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
};

export default SinglePost;
