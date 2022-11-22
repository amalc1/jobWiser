import {
  Alert,
  Avatar,
  Box,
  Button,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material/";
import Navbar from "../../components/user/Navbar";
import FormInput from "../../components/user/FormInput";
import { useForm } from "../../Hooks/useForm";
// import { axiosUserInstance as axios } from "../../config/http";
import { Link } from "react-router-dom";
import { postRequest } from "../../helper/HandleRequest";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "1rem",
  borderRadius: "25px",
  width: "30rem",
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

const SAvatar = styled(Avatar)(({ theme }) => ({
  m: 1,
  backgroundColor: theme.palette.primary.blue,
}));

const doSignUp = async (values) => {
  const route = "/signup";
  const respData = await postRequest(route, values);
  let errData = respData.err.response.data;
  if (!respData.success && errData?.err) {
    return errData.err;
  }
};

const SignUp = () => {
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    confirmPasswordErr,
    fieldsErr,
  } = useForm(doSignUp);
  // console.log(values);
  // console.log("formErrors", errors);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <StyledPaper elevation={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SAvatar sx={{ backgroundColor: "#4540D" }}>
              <LockOutlinedIcon />
            </SAvatar>
            <Typography variant="h6">Sign Up</Typography>
            {fieldsErr && (
              <Alert sx={{ textTransform: "capitalize" }} severity="error">
                {fieldsErr}
              </Alert>
            )}
            <Box
              mt={1}
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ width: "95%" }}
              autoComplete="off"
            >
              <FormInput
                placeHolder="Enter your name"
                label1="name"
                name="name"
                error={errors.username ? true : false}
                helperText={
                  errors.username ? "Name atleast have 5 letters" : ""
                }
                onChange={handleChange}
                type="text"
              />
              <FormInput
                placeHolder="Enter your Email"
                label1="email"
                name="email"
                error={errors.email ? true : false}
                helperText={errors.email ? "Enter a valid email address" : ""}
                onChange={handleChange}
                type="text"
              />
              <FormInput
                placeHolder="Enter your Phone Number"
                type="number"
                name="mobile"
                error={errors.mobile ? true : false}
                helperText={
                  errors.mobile ? "number must contain 10 digits" : ""
                }
                onChange={handleChange}
                label1="Phone number"
              />
              <FormInput
                placeHolder="Enter your Password"
                type="password"
                name="password"
                error={errors.password ? true : false}
                helperText={
                  errors.password
                    ? "must include atleast 8 charaters & uppercase,lowercase and numbers"
                    : ""
                }
                onChange={handleChange}
                label1="password"
              />
              <FormInput
                placeHolder="Confirm Password"
                type="password"
                name="confirmPassword"
                error={confirmPasswordErr}
                helperText={confirmPasswordErr && "Password should match"}
                //
                onChange={handleChange}
                label1="confirm password"
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <BlueButton type="submit" size="medium" variant="contained">
                  SignUp
                </BlueButton>
              </Box>
              <Link to="/login" variant="body2">
                <Typography
                  mt={2}
                  sx={{
                    color: "#4540DB",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    textAlign: "center",
                  }}
                >
                  "Already Have An Account? Sign In"
                </Typography>
              </Link>
            </Box>
          </Box>
        </StyledPaper>
      </Box>
    </>
  );
};

export default SignUp;
