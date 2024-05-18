import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { MdOutlineMail, MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Container, Grid, TextField, Button, Typography, Box, CircularProgress } from "@mui/material";
// import XSvg from "./Svg";
import "./Home.css";

const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: async ({ email, username, fullName, password }) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, fullName, password }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create account");
        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xl" className="signup-container">
      <Grid container className="signup-grid">
        <Grid item lg={6} className="logo-container">
          {/* <XSvg className="logo" /> */}
        </Grid>
        <Grid item lg={6} xs={12} className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            {/* <XSvg className="logo-mobile" /> */}
            <Typography variant="h4" className="title">
              Join today.
            </Typography>
            <Box className="input-box">
              <MdOutlineMail className="icon" />
              <TextField
                fullWidth
                variant="outlined"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </Box>
            <Grid container spacing={2} className="input-box">
              <Grid item xs={12} sm={6}>
                <Box className="input-box">
                  <FaUser className="icon" />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className="input-box">
                  <MdDriveFileRenameOutline className="icon" />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    onChange={handleInputChange}
                    value={formData.fullName}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box className="input-box">
              <MdPassword className="icon" />
              <TextField
                fullWidth
                variant="outlined"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-btn"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={24} /> : "Sign up"}
            </Button>
            {isError && <Typography color="error">{error.message}</Typography>}
          </form>
          <Box className="signin-box">
            <Typography variant="body1" className="signin-text">
              Already have an account?
            </Typography>
            <Link to="/login" className="signin-link">
              <Button variant="outlined" color="primary" className="signin-btn" fullWidth>
                Sign in
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
