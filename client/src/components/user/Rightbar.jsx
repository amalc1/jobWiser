import { Box, Paper, styled, Typography, Button, Avatar } from "@mui/material";
import React from "react";

const ProBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  padding: "0.8rem",
  borderRadius: "15px",
  marginTop: "3rem",
  width: "19.4rem",
}));

const Rightbar = () => {
  return (
    <ProBox flex={1.4}>
      <Box position="fixed">
        <StyledPaper elevation={8}>
          <Typography variant="h5" fontWeight={300} ml={1} mb={2}>
            Connections
          </Typography>

          <Box display="flex" width="90%" m={1}>
            <Box display="flex" flexDirection="column">
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Typography variant="body1" ml={2}>
                  james Don
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                <Typography variant="body1" ml={2}>
                  sam alex
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Typography variant="body1" ml={2}>
                  james Don
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                <Typography variant="body1" ml={2}>
                  sam alex
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Typography variant="body1" ml={2}>
                  james Don
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                <Typography variant="body1" ml={2}>
                  sam alex
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Typography variant="body1" ml={2}>
                  james Don
                </Typography>
              </Box>
              <Box ml={1} mb={1} display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                <Typography variant="body1" ml={2}>
                  sam alex
                </Typography>
              </Box>
            </Box>
          </Box>
        </StyledPaper>
      </Box>
    </ProBox>
  );
};

export default Rightbar;
