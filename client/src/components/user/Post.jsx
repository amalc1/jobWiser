import React, { useContext, useRef } from "react";
import { MoreVert, Send } from "@mui/icons-material";
import Swal from "sweetalert2";
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
  Menu,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import noAvatar from "../../images/avatar.png";
import PostFunctions from "../user/PostFunctions";
import { useState } from "react";
import { getRequest, postRequest } from "../../helper/HandleRequest";
import { GlobalContext } from "../../Context/Global";

const Post = ({ post, setLike }) => {
  const { loggedUser } = useContext(GlobalContext);
  const [expanded, setExpanded] = useState(false);
  let commentRef = useRef(null);

  const { name: userName, _id: userId } = loggedUser;
  let { name, description, image, date, ...otherKeys } = post;
  let reversedCmnts = [...post.comments].reverse();

  const postComment = (postId) => {
    let comment = commentRef.current.value;
    let reqData = { userId, postId, userName, comment };
    postRequest("/comment", reqData).then((res) => {
      setLike((a) => !a);
      commentRef.current.value = "";
    });
  };

  const deletePost = (postId) => {
    Swal.fire({
      text: "Are you sure to delete this post",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        getRequest(`/delete-post/?post_id=${postId}`).then((res) => {
          if (res.success) {
            setLike((a) => !a);
          }
        });
      }
    });
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card sx={{ height: "auto", margin: 4 }} elevation={8}>
        <CardHeader
          avatar={
            <Avatar
              src={loggedUser?.profile_pic ? loggedUser?.profile_pic : noAvatar}
              aria-label="recipe"
            />
          }
          action={
            <IconButton aria-label="settings">
              <div>
                <MoreVert
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose} dense>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose} disabled dense>
                    Report
                  </MenuItem>
                  <MenuItem onClick={() => deletePost(post._id)} dense>
                    Delete
                  </MenuItem>
                </Menu>
              </div>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                  inputRef={commentRef}
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

            {reversedCmnts.map((cmnt) => (
              <Paper
                key={cmnt._id}
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
          </Box>
        </Collapse>
      </Card>
    </>
  );
};

export default Post;
