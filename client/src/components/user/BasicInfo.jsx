import { Edit } from "@mui/icons-material";
import { Box, Divider, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";

// const BlueButton = styled(Button)(({ theme }) => ({
//   color: "white",
//   backgroundColor: "#4540DB",
//   textTransform: "capitalize",
//   "&:hover": {
//     backgroundColor: theme.palette.primary.light,
//   },
// }));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray,
  padding: "1rem",
  borderRadius: "15px",
}));

const BasicInfo = () => {
  return (
    <>
      <StyledPaper elevation={1}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" textAlign="start">
            Basic Information
          </Typography>
          <Edit sx={{ cursor: "pointer" }} />
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                padding: "0.2rem",
                flexDirection: "column",
              }}
            >
              <Typography variant="overline" sx={{ fontSize: "1rem" }}>
                age
              </Typography>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                25
              </p>
              <Divider
                fullwidth="true"
                sx={{ margin: "0.5rem 0", width: "80%" }}
              />
              <Typography variant="overline" sx={{ fontSize: "1rem" }}>
                CTC
              </Typography>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                25
              </p>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                padding: "0.2rem",
                flexDirection: "column",
              }}
            >
              <Typography variant="overline" sx={{ fontSize: "1rem" }}>
                Years of experience
              </Typography>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                25
              </p>
              <Divider
                fullwidth="true"
                sx={{ margin: "0.5rem 0", width: "80%" }}
              />
              <Typography variant="overline" sx={{ fontSize: "1rem" }}>
                location
              </Typography>
              <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>25</p>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                padding: "0.2rem",
                flexDirection: "column",
              }}
            >
              <Typography variant="overline" sx={{ fontSize: "1rem" }}>
                Phone
              </Typography>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                25
              </p>
              <Divider
                fullwidth="true"
                sx={{ margin: "0.5rem 0", width: "80%" }}
              />
              <Typography variant="overline" sx={{ fontSize: "1rem" }}>
                Email
              </Typography>
              <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>25</p>
            </Box>
          </Grid>
        </Grid>
        {/* <BlueButton size="medium" variant="contained" sx={{ margin: "0 1rem" }}>
          Upload Resume
        </BlueButton> */}
      </StyledPaper>
    </>
  );
};

export default BasicInfo;
