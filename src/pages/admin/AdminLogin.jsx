import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";
import { bgGradient } from "../../constants/color";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if (isAdmin) return <Navigate to="/admin/dashboard" />;
  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Login</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              variant="outlined"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Admin Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
