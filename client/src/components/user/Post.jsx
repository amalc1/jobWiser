import React from "react";
import {
  Comment,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import noAvatar from "../../images/avatar.png";

const Post = ({ post }) => {
  let { name, description, image, date } = post;
  return (
    <>
      <Card sx={{ height: "37rem", margin: 4 }} elevation={8}>
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
        <CardMedia
          component="img"
          height="64%"
          image={image}
          alt="Paella dish"
        />
        <CardActions
          sx={{
            display: "flex",
            mx: "auto",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <Comment />
          </IconButton>
          <IconButton aria-label="share" sx={{ marginRight: "1rem" }}>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
