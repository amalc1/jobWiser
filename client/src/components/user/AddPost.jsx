import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Close, PhotoSizeSelectActual, Send } from "@mui/icons-material/";
import React from "react";
import { useState } from "react";
import noAvatar from "../../images/avatar.png";

const SBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray,
  margin: "auto",
  marginTop: "3rem",
  height: "4.5rem",
  width: "90%",
  borderRadius: "10px",
}));

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  marginTop: "20px",
});

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };

  return (
    <>
      <SBox elevation={8}>
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
            sx={{ width: 40, height: 40, mx: " auto", mb: 1, mt: 1 }}
          />
          <Box
            onClick={(e) => setOpen(true)}
            color="black"
            flex={2}
            display="flex"
            sx={{
              color: "black",
              width: "100%",
              alignItems: "center",
              backgroundColor: "white",
              height: "2.5rem",
              cursor: "pointer",
              borderRadius: "24rem",
              border: "1px solid #808080",
            }}
          >
            <Typography variant="body2" ml={2}>
              Start a Post
            </Typography>
          </Box>
        </Stack>

        <StyledModal
          open={open}
          // onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            bgcolor="white"
            p={3}
            borderRadius={5}
            sx={{ width: "35%", height: "auto", outline: "none" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" color="gray" mx="auto">
                Create A Post
              </Typography>
              <Close
                sx={{ cursor: "pointer" }}
                onClick={(e) => {
                  setOpen(false);
                }}
              />
            </Box>

            <Divider />

            <UserBox>
              <Avatar src={noAvatar} sx={{ width: 30, height: 30 }} />
              <Typography fontWeight={500} variant="span">
                John Doe
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                mx: "auto",
                marginTop: "0.5rem",
              }}
            >
              <Button component="label">
                <PhotoSizeSelectActual />
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/jfif"
                  onChange={handleChange}
                  hidden
                />
              </Button>
              <Button>
                <Send sx={{ color: "blue" }} />
              </Button>
            </Box>
            <img src={image} alt="" />
          </Box>
        </StyledModal>
      </SBox>
    </>
  );
};

export default AddPost;
