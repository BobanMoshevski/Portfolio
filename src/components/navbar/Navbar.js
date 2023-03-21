import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <ul className="nav-links">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
