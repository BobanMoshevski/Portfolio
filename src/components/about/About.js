import { Box, Button, Grid, Typography } from "@mui/material";
import url from "./resume-boban/Resume-Boban-Moshevski.pdf";
import "./About.css";

const About = () => {
  return (
    <Box id="about" className="about" pt={5}>
      <Grid container alignItems="center">
        <Grid item md={1} />

        <Grid item md={10} mx={2}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={2}
              sx={{
                display: { md: "none", xs: "flex" },
              }}
            />

            <Grid item lg={4} md={4} xs={8}>
              <Box className="about-wrapper" my={3}>
                <img src={require("./img/Boban.jpg")} alt="Boban" />
              </Box>
            </Grid>

            <Grid item md={1} xs={2} />

            <Grid item lg={6} md={7}>
              <Box
                className="about-wrapper"
                sx={{
                  padding: "30px",
                  border: "1px solid white",
                  borderRadius: "80px 30px 80px 30px",
                }}
              >
                <Typography variant="h4">About me</Typography>
                <p>
                  My name is Boban Moshevski. You being here means that you want
                  to get to know about me and my experiences. My skills include
                  HTML, CSS, Bootstrap, Javascript, JQuery, React js, as well as
                  the fundamentals of Java and Nodejs. My curiosity and
                  dedication provided me with the perfect platform to develop
                  myself in all of these different proffessions, as I try to
                  constantly improve myself. I bring passion into work, as well
                  as never give-up attitude to the challenges.
                </p>
                <Button
                  sx={{
                    boxShadow: 10,
                    bgcolor: "#777",
                    color: "#fff",
                    "&:hover": {
                      bgcolor: "#444",
                      color: "#999",
                    },
                  }}
                  href={url}
                  download={"Resume-Boban-Moshevski.pdf"}
                  variant="contained"
                >
                  Download resume
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} />
      </Grid>
    </Box>
  );
};

export default About;
