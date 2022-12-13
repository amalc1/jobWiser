import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Modal,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Edit, Send } from "@mui/icons-material/";
import React, { useContext, useState } from "react";
import noAvatar from "../../images/avatar.png";
import { GlobalContext } from "../../Context/Global";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray,
  padding: "1rem",
  borderRadius: "15px",
}));

const BlueButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#4540DB",
  width: "30%",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProfileLeft = () => {
  const { loggedUser } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box flex={1}>
        <StyledPaper elevation={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <Avatar
              alt="Remy Sharp"
              src={noAvatar}
              sx={{ width: 88, height: 88, mx: " auto" }}
            />
            <Box>
              <Typography variant="h6" textAlign="center">
                {loggedUser?.name}
              </Typography>
              <Box sx={{ width: "95%", mx: "auto" }}>
                <p style={{ textAlign: "center" }}>designation:</p>
                <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
                  About:
                </p>
                <Edit
                  sx={{ cursor: "pointer", float: "right" }}
                  onClick={() => setOpen(true)}
                />
              </Box>
            </Box>

            <Box p={1}>
              <Typography
                variant="h6"
                textAlign="start"
                sx={{ fontSize: "1rem" }}
              >
                Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Chip
                  label="html"
                  variant="outlined"
                  sx={{
                    margin: "0.2rem",
                    color: "black",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </StyledPaper>
      </Box>
      <StyledModal
        open={open}
        // onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor="white"
          px={2}
          py={1}
          borderRadius={5}
          sx={{ width: "35%", minHeight: "30%", outline: "none" }}
        >
          <Close
            sx={{ cursor: "pointer", float: "right" }}
            onClick={(e) => {
              setOpen(false);
              // setImage("");
              // setContent("");
            }}
          />

          <Grid container spacing={1}>
            <Grid item xs={7}>
              <TextField
                style={{ width: "100%", margin: "5px" }}
                type="text"
                label="Designation"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={5} display="flex" justifyContent="center">
              <Box display="flex" alignItems="center">
                <Avatar
                  flex={1}
                  alt="Remy Sharp"
                  src={noAvatar}
                  sx={{
                    width: 50,
                    height: 50,
                    mx: " auto",
                  }}
                />
                <Box component="label" size="small">
                  <Edit
                    sx={{
                      fontSize: "1rem",
                      margin: "0 0.5rem",
                      cursor: "pointer",
                    }}
                  />
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/jfif"
                    // onChange={handleChange}
                    hidden
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%", margin: "5px" }}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="About........"
                variant="standard"
              />

              <Box
                sx={{
                  width: "90%",
                  mx: "auto",
                  marginTop: "1rem",
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={6} display="flex" alignItems="center">
                    <TextField
                      style={{ width: "100%" }}
                      type="text"
                      label="Skills"
                      placeholder="Add Skills"
                      variant="outlined"
                    />
                    <Send sx={{ margin: "0 0.3rem", cursor: "pointer" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        gap: "0.4rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Chip label="skill 1" />
                        <Close sx={{ cursor: "pointer", fontSize: "1rem" }} />
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Chip label="skill 1" />
                        <Close sx={{ cursor: "pointer", fontSize: "1rem" }} />
                      </div>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    margin: "0.8rem 0",
                  }}
                >
                  <BlueButton type="submit" size="medium" variant="contained">
                    Save
                  </BlueButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </>
  );
};

export default ProfileLeft;
