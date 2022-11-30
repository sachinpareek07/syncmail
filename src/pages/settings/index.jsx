import "./styles.scss";

import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { saveEmailSettings } from "../../api/emails";

const theme = createTheme();

const Settings = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [btnTxt, setBtnTxt] = useState("Save");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    setBtnTxt("Saving...");
    event.preventDefault();
    try{
      await saveEmailSettings(data);
      setBtnTxt("Saved");
      setTimeout(() => {
        setBtnTxt("Save");
      }, 2000);
    }
    catch (error) {
      alert("Error saving email settings");
      setBtnTxt("Save");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter your credentials
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate={false}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={btnTxt === "Saving..."}
            >
              {btnTxt}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Settings;
