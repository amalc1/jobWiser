import { Edit } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "15px",
  marginTop: "1rem",
}));

const Experience = () => {
  return (
    <>
      <StyledPaper elevation={3}>
        {/* <Box sx={{ display: "flex", justifyContent: "end", width: "auto" }}> */}
        <Edit sx={{ cursor: "pointer", float: "right", width: "auto" }} />
        {/* </Box> */}
        <Stack direction="row">
          <Box flex={1}>
            <Typography variant="h6" textAlign="start">
              Experience
            </Typography>
            <List
              sx={{
                width: "100%",
                bgcolor: "transparent",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                textAlign="start"
                sx={{
                  fontSize: "1.1rem",
                  textTransform: "capitalize",
                  color: "#4540DB",
                }}
              >
                infosys
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                }}
              >
                designation:
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                April 2018 present
              </Typography>
              <Divider fullwidth="true" sx={{ width: "80%" }} />
            </List>
          </Box>
          <Box flex={1} sx={{ padding: "0 1rem" }}>
            <Typography variant="h6" textAlign="start">
              Education
            </Typography>
            <List
              sx={{
                width: "100%",
                bgcolor: "transparent",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                textAlign="start"
                sx={{
                  fontSize: "1.1rem",
                  textTransform: "capitalize",
                }}
              >
                Acme University
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                }}
              >
                designation:
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                April 2018 present
              </Typography>
              <Divider fullwidth="true" component="li" />
            </List>
          </Box>
        </Stack>
      </StyledPaper>
    </>
  );
};

export default Experience;
