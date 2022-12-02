import { Comment, Share, ThumbUp } from "@mui/icons-material";
import {
  Box,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { postRequest } from "../../helper/HandleRequest";

const PostFunctions = ({ setLike, post }) => {
  let userId = JSON.parse(localStorage.getItem("userInfo"))?._id;
  let reqData = { userId, postId: post._id };
  let doPostLike = () => {
    postRequest("/like", reqData).then((res) => {
      if (res.success) {
        setLike((like) => !like);
      }
    });
  };

  return (
    <>
      {console.log("post action")}
      <CardActions
        sx={{
          display: "flex",
          mx: "auto",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              doPostLike();
            }}
          >
            {post.likes.includes(userId) ? (
              <ThumbUp sx={{ color: "#1b81ff" }} />
            ) : (
              <ThumbUp />
            )}
          </IconButton>
          <Typography variant="body2">{post.likes.length}</Typography>
        </Box>
        <IconButton aria-label="add to favorites">
          <Comment />
        </IconButton>
        <IconButton aria-label="share" sx={{ marginRight: "1rem" }}>
          <Share />
        </IconButton>
      </CardActions>
    </>
  );
};

export default PostFunctions;
