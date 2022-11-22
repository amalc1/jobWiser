import {
  AppBar,
  Box,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "85%",
  margin: "0 auto",
});

const BlueButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#4540DB",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar sx={{ bgcolor: "#F5F5F5", color: "black" }}>
        <StyledToolbar position="sticky">
          <Typography variant="h6">
            Cozmo<span style={{ color: "#4540DB" }}>Solutions</span>
          </Typography>
          <Box sx={{ color: "#4540DB" }}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="text"
                sx={{ color: "black", textTransform: "capitalize" }}
               onClick={()=>{navigate('/login')}}>
                Login
              </Button>
              <BlueButton
                size="medium"
                variant="contained"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </BlueButton>
            </Stack>
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
