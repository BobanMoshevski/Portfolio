import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "./Portfolio.css";

const Portfolio = () => {
  const openLandingPage = () => {
    window.open("https://flourishing-axolotl-bb8453.netlify.app/", "_blank");
  };

  const openShopLandingPage = () => {
    window.open("https://aquamarine-kashata-a97333.netlify.app/", "_blank");
  };

  const openMarketplaceProject = () => {
    window.open(
      "https://github.com/BobanMoshevski/Marketplace-application",
      "_blank"
    );
  };

  return (
    <Box id="portfolio" className="portfolio">
      <Typography align="center" variant="h3" mb={5}>
        Portfolio
      </Typography>

      <Grid container px={2}>
        <Grid item md={2} />
        <Grid item md={10}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={4} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={require("./img/project-img1.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Landing Page for Educational Company
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A static webpage designed to inform the user of the
                      upcoming events hosted by the company. Built using HTML,
                      CSS and Bootstrap
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      sx={{
                        textTransform: "none",
                        boxShadow: 10,
                        bgcolor: "#777",
                        color: "#111",
                        "&:hover": {
                          bgcolor: "#444",
                          color: "#fff",
                        },
                      }}
                      variant="contained"
                      onClick={openLandingPage}
                    >
                      View page
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={4} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={require("./img/project-img2.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Shop Section for Events Landing page
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A dynamic landing page, allowing the user to get informed
                      about upcoming events, add to cart, and buy tickets
                      through the website. The ecommerce functionality is
                      implemented using JavaScript
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      sx={{
                        textTransform: "none",
                        boxShadow: 10,
                        bgcolor: "#777",
                        color: "#111",
                        "&:hover": {
                          bgcolor: "#444",
                          color: "#fff",
                        },
                      }}
                      variant="contained"
                      onClick={openShopLandingPage}
                    >
                      View page
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={4} sm={6}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={require("./img/project-img3.png")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Marketplace
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Marketplace application with sign up, and login
                      functionalities, as well as various functions allowing
                      users to buy, edit, add and delete products. Built using
                      the React framework
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button
                      sx={{
                        textTransform: "none",
                        boxShadow: 10,
                        bgcolor: "#777",
                        color: "#111",
                        "&:hover": {
                          bgcolor: "#444",
                          color: "#fff",
                        },
                      }}
                      variant="contained"
                      onClick={openMarketplaceProject}
                    >
                      View project
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
