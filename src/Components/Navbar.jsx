import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { heading: "About", url: "/" },
  { heading: "Build", url: "/build" },
  { heading: "Community", url: "/Community" },
];

const Navbar = () => {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  console.log(theme);

  const isMatched = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Box
            sx={{
              display: { md: "flex", xs: "flex", sm: "flex" },
              gap: 2,
              alignItems: "center",
              py: 3,
            }}
          >
            <Typography
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: "24px",
                color: "#6300C6",
                fontFamily: "Lato",
              }}
            >
              Logo Here
            </Typography>
            {isMatched ? (
              <>
                <Drawer
                  anchor="right"
                  open={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                >
                  <Typography
                    sx={{
                      cursor: "pointer",
                      textTransform: "capitalize",
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "#6300C6",
                      fontFamily: "Lato",
                      marginX: "auto",
                    }}
                  >
                    Logo Here
                  </Typography>
                  <List>
                    {pages.map((page, index) => (
                      <ListItemButton key={index}>
                        <ListItemIcon>
                          <ListItemText
                            sx={{
                              width: 220,
                              textAlign: "center",
                              color: "#AD00FF",
                              padding: "1rem 1rem",
                              fontSize: 25,
                              fontWeight: "bold",
                              fontFamily: "Lato",
                            }}
                          >
                            <Link to={page.url}>{page.heading}</Link>
                          </ListItemText>
                        </ListItemIcon>
                      </ListItemButton>
                    ))}
                  </List>
                  <Box sx={{ marginX: "auto" }}>
                    <Link to="/roadmap">
                      <ListItemButton>
                        <ListItemText
                          sx={{
                            width: 220,
                            textAlign: "center",
                            color: "#AD00FF",
                            padding: "1rem 1rem",
                            fontSize: 25,
                            fontWeight: "bold",
                            fontFamily: "Lato",
                          }}
                        >
                          RoadMap
                        </ListItemText>
                      </ListItemButton>
                    </Link>

                    <Link to="/liveroadmap">
                      <ListItemButton>
                        <ListItemText
                          sx={{
                            width: 220,
                            textAlign: "center",
                            color: "#AD00FF",
                            padding: "1rem 1rem",
                            fontSize: 25,
                            fontWeight: "bold",
                            fontFamily: "Lato",
                          }}
                        >
                          Live RoadMap
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  </Box>
                </Drawer>
                <IconButton
                  edge="start"
                  color="inherit"
                  size="large"
                  aria-label="logo"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Stack
                  spacing={6}
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {pages.map(({ heading, url }, i) => (
                    <Typography
                      key={i}
                      color="#000"
                      sx={{
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: "22px",
                        textTransform: "capitalize",
                        fontFamily: "Lato",
                      }}
                    >
                      <Link to={url}>{heading}</Link>
                    </Typography>
                  ))}
                  <Box>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      variant="text"
                      sx={{
                        color: "#AD00FF",
                        fontFamily: "Lato",
                        fontWeight: 700,
                        fontSize: "22px",
                        mt: -1,
                      }}
                    >
                      RoadMap
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link to="/roadmap">
                        <MenuItem onClick={handleClose}>RoadMap</MenuItem>
                      </Link>
                      <Link to="/liveroadmap">
                        <MenuItem onClick={handleClose}>Live RoadMap</MenuItem>
                      </Link>
                    </Menu>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 900,
                      color: "#fff",
                      fontFamily: "Lato",
                      mt: 4,
                      borderRadius: 5,
                      background:
                        "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                      px: 7,
                    }}
                  >
                    Docs
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
