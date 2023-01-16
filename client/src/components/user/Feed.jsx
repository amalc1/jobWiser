import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getRequest } from "../../helper/HandleRequest";
import AddPost from "./AddPost";
import Post from "./Post";

const Feed = () => {
  let [posts, setPosts] = useState([]);
  const [like, setLike] = useState(false);
  const [render, setRender] = useState(true);
  const location = useLocation();
  const notifPostId = location.pathname.split("/")[2];

  let getPost = async () => {
    let { returnedValue } = await getRequest("/feed");
    setPosts(returnedValue);
  };

  useEffect(() => {
    getPost();
    console.log("useffPost like->", like);
  }, [render, like]);

  useEffect(() => {
    if (notifPostId) {
      let notifPost = posts.filter((post) => post?._id === notifPostId);
      setPosts(notifPost);
    }
  }, [location, notifPostId]);

  return (
    <>
      <Box flex={3} display="flex" flexDirection="column">
        <AddPost setRender={setRender} />
        {posts &&
          posts.map((post) => (
            <Post key={post?._id} post={post} like={like} setLike={setLike} />
          ))}
      </Box>
    </>
  );
};

export default Feed;
