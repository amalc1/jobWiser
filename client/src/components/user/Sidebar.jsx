import { Avatar, Box, Paper, styled, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/Global";
import noAvatar from "../../images/avatar.png";

const ProBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.between("600", "1139")]: {
    display: "none",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: "0.8rem",
  borderRadius: "15px",
  marginTop: "3rem",
  width: "13rem",
}));

const Sidebar = () => {
  const { loggedUser } = useContext(GlobalContext);
  // useEffect(() => {}, []);

  return (
    <ProBox flex={1}>
      <Box position="fixed">
        <StyledPaper elevation={8}>
          <Avatar
            alt="Remy Sharp"
            src={loggedUser?.profile_pic ? loggedUser?.profile_pic : noAvatar}
            sx={{ width: 56, height: 56, mx: " auto", mb: 1, mt: 1 }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginBottom={2}
          >
            <Typography variant="h6" textAlign="center">
              {loggedUser?.name}
            </Typography>
            <Typography variant="overline" gutterBottom>
              {loggedUser?.designation}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              width="90%"
              mb={1}
            >
              <Typography variant="body2">Following</Typography>
              <Typography>{loggedUser?.connections.length}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              width="90%"
              mb={1}
            >
              <Typography variant="body2">Posts</Typography>
              <Typography>6</Typography>
            </Box>
            {/* <Box
              display="flex"
              justifyContent="space-between"
              width="90%"
              mb={1}
            >
              <Typography variant="body2">Jobs</Typography>
              <Typography>0</Typography>
            </Box> */}
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": { color: "white" },
                }}
              >
                View Profile
              </Button>
            </Link>
          </Box>
        </StyledPaper>
      </Box>
    </ProBox>
  );
};

export default Sidebar;
