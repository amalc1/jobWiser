import { Box } from "@mui/system";
import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

const Feed = () => {
  return (
    <>
      <Box flex={3}  display="flex" flexDirection="column">
        <AddPost />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </>
  );
};

export default Feed;
