import { Box, Button, TextField, Avatar } from "@mui/material";
import React, { useState } from "react";
import { composeEmail } from "../../api/emails";
import CssBaseline from "@mui/material/CssBaseline";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const ComposeMail = () => {
  const [btnTxt, setBtnTxt] = useState("Send");
  const [data, setData] = useState({
    to: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setBtnTxt("Sending...");
    e.preventDefault();
    try {
        await composeEmail(data);
        setBtnTxt("Sent");
        setTimeout(() => {
          setBtnTxt("Send");
        }, 2000);
    }
    catch (error) {
        alert("Error sending email");
        setBtnTxt("Send");
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
            <EmailOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Compose Mail
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
              id="to"
              label="To"
              name="to"
              autoComplete="to"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="subject"
              label="Subject"
              type="subject"
              id="subject"
              autoComplete="subject"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              type="message"
              id="message"
              autoComplete="message"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={btnTxt === "Sending..."}
            >
              {btnTxt}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ComposeMail;