import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InputStyle } from "./inputStyle";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const reg = /\S+@\S+\.\S+/;
  const validFormBtn =
    name.length !== 0 && message.length !== 0 && reg.test(email);

  return (
    <Box id="contact" className="contact">
      <Typography variant="h3" mb={10}>
        Contact
      </Typography>

      <Grid container>
        <Grid item xs={1} />

        <Grid item xs={10}>
          <Grid container>
            <Grid item md={6} sm={12} marginBottom={5} textAlign="center" width>
              <Typography variant="h6">Name: Boban Moshevski</Typography>
              <Typography variant="h6" my={4}>
                Phone: +389 75 785 166
              </Typography>
              <Typography variant="h6">Email: bmoshevski@gmail.com</Typography>

              <Box>
                <a
                  className="icons"
                  href="https://github.com/BobanMoshevski"
                  target="_blank, noopener"
                >
                  <GitHubIcon />
                </a>
                <a
                  className="icons"
                  href="https://www.linkedin.com/in/boban-moshevski-b63b93262/"
                  target="_blank, noopener"
                >
                  <LinkedInIcon />
                </a>
              </Box>
            </Grid>

            <Grid
              item
              md={6}
              sm={12}
              boxShadow={15}
              padding={4}
              marginBottom={3}
            >
              <form action="/contact" name="contact" method="post" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <Grid container spacing={2}>
                  <Grid item sm={6} width>
                    <InputStyle
                      name="name"
                      label="Name:"
                      variant="outlined"
                      sx={{
                        width: "100%",
                      }}
                      onChange={(e) => setName(e.target.value)}
                      onClick={() => setNameError(true)}
                      required
                    />
                    {nameError && name === "" && (
                      <Typography variant="body1" sx={{ color: "red" }}>
                        Name is require!
                      </Typography>
                    )}
                  </Grid>

                  <Grid item sm={6} width>
                    <InputStyle
                      name="email"
                      label="Email:"
                      variant="outlined"
                      sx={{
                        width: "100%",
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                      onClick={() => setEmailError(true)}
                      required
                    />
                    {emailError && !reg.test(email) && (
                      <Typography variant="body1" sx={{ color: "red" }}>
                        Email is require!
                      </Typography>
                    )}
                  </Grid>

                  <Grid item sm={12} width>
                    <InputStyle
                      name="message"
                      label="Message:"
                      multiline
                      rows={4}
                      onChange={(e) => setMessage(e.target.value)}
                      onClick={() => setMessageError(true)}
                      required
                    />
                    {messageError && message.length === 0 && (
                      <Typography variant="body1" sx={{ color: "red" }}>
                        Message is requires!
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <Button
                  sx={{
                    boxShadow: 10,
                    bgcolor: "#777",
                    color: "#333",
                    marginTop: 3,
                    "&:hover": {
                      bgcolor: "#444",
                      color: "#fff",
                    },
                  }}
                  disabled={!validFormBtn}
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
