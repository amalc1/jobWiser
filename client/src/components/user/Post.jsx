import React from "react";
import { MoreVert, Send } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import noAvatar from "../../images/avatar.png";
import PostFunctions from "../user/PostFunctions";
import { useState } from "react";
import { postRequest } from "../../helper/HandleRequest";

const Post = ({ post, setLike }) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const { name: userName, _id: userId } = JSON.parse(
    localStorage.getItem("userInfo")
  );
  let { name, description, image, date, ...otherKeys } = post;
  post.comments.reverse();
  const postComment = (postId) => {
    let reqData = { userId, postId, userName, comment };
    postRequest("/comment", reqData).then(() => {
      setLike((a) => !a);
      setComment("");
    });
  };

  return (
    <>
      <Card sx={{ height: "auto", margin: 4 }} elevation={8}>
        <CardHeader
          avatar={<Avatar src={noAvatar} aria-label="recipe" />}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader={date}
        />
        <CardContent>
          <Typography variant="body" color="text.primary">
            {description}
          </Typography>
        </CardContent>
        {image && <CardMedia component="img" image={image} alt="Paella dish" />}
        <PostFunctions
          setLike={setLike}
          post={otherKeys}
          showComment={setExpanded}
        />

        {/* commentBox */}
        <Box sx={{ width: "94%", mx: "auto" }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            pl={2}
            pr={2}
            height="100%"
          >
            <Avatar
              flex={1}
              alt="Remy Sharp"
              src={noAvatar}
              sx={{ width: 30, height: 30, mx: " auto", mb: 1, mt: 1 }}
            />
            <Box
              flex={2}
              display="flex"
              sx={{
                width: "100%",
                padding: "0.1rem 0.5rem",
                alignItems: "center",
                minHeight: "2.1rem",
                borderRadius: "24rem",
                border: "1px solid gray",
              }}
            >
              <TextField
                variant="standard" // <== changed this
                margin="none"
                multiline
                required
                fullWidth
                autoFocus
                placeholder="Add a comment..."
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                InputProps={{
                  // startAdornment: "", // <== adjusted this
                  disableUnderline: true, // <== added this
                }}
              />
              <Send
                onClick={() => postComment(post._id)}
                sx={{ cursor: "pointer" }}
              />
            </Box>
          </Stack>
          <Divider fullwidth="true" sx={{ margin: "0.3rem 0" }} />

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {post.comments.map((cmnt) => (
              <Paper
                style={{
                  padding: "0.5rem 1rem",
                  marginBottom: "0.4rem",
                }}
                elevation={0}
              >
                <Grid container wrap="nowrap" spacing={0.4}>
                  <Grid item>
                    <Avatar
                      src={noAvatar}
                      alt="Remy Sharp"
                      sx={{ width: 20, height: 20 }}
                    />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography
                      variant="body1"
                      style={{
                        margin: "0 0.6rem",
                        textAlign: "left",
                        fontSize: "0.85rem",
                      }}
                    >
                       {cmnt.name}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#F5F5F5",
                        borderRadius: "25px",
                        padding: "0.5rem 1rem",
                        marginTop: "0.3rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      <Typography
                        variant="subtitle"
                        sx={{
                          textAlign: "left",
                          fontSize: "0.85rem",
                        }}
                      >
                        {cmnt.comment}
                      </Typography>
                    </Box>
                    {/* <Typography
              variant="caption"
              style={{
                textAlign: "left",
                color: "gray",
                margin: "0.5rem 0.6rem",
              }}
            >
              posted 1 minute ago
            </Typography> */}
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Collapse>
        </Box>
      </Card>
    </>
  );
};

export default Post;
