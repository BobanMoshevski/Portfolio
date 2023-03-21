import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <Box id="home" className="home-wrapper">
      <Typography variant="h4">Hello, I am Boban</Typography>

      <Typography variant="h6">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Front-End Developer")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>

      <Typography variant="body1">Welcome to my portfolio!</Typography>
    </Box>
  );
};

export default Home;
