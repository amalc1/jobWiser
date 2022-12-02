import React from "react";
import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import noAvatar from "../../images/avatar.png";
import PostFunctions from "../user/PostFunctions";
import { useState } from "react";

const Post = ({ post, setLike}) => {
  let { name, description, image, date, ...otherKeys } = post;
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
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        {image && <CardMedia component="img" image={image} alt="Paella dish" />}
        <PostFunctions setLike={setLike} post={otherKeys}  />
      </Card>
    </>
  );
};

export default Post;
