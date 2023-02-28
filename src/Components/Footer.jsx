import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <ScrollToTop smooth />
      <Box sx={{ mt: 6 }}>
        <Container>
          <Grid container sx={{}} spacing={2}>
            <Grid item xs={12} md={4} sm={12}>
              <Box
                sx={{
                  px: 2,
                  py: 7,
                  display: "flex",
                  justifyContent: { xs: "center", sm: "center", md: "left" },
                }}
              >
                <Box
                  sx={{
                    width: "200px",
                    height: "200px",
                    background:
                      "linear-gradient(180deg, #6100BF 0%, #AD00FF 100%)",
                    borderRadius: 25,
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontWeight: 700,
                      fontSize: "36px",
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    Logo here
                  </Typography>
                </Box>
                <Typography variant="h6" component="p"></Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={2} sm={6}>
              <Box
                sx={{
                  py: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: {
                    md: "flex-start",
                    sm: "center",
                    xs: "flex-start",
                  },
                  flexDirection: "column",
                  alignItems: {
                    sm: "center",
                    md: "flex-start",
                    xs: "flex-start",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#48007C",
                    mb: 2,
                  }}
                >
                  Build
                </Typography>
                <Stack spacing={3} direction="column">
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                      Wallets
                    </Typography>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Exchanges
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Explorer
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Docs
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Roadmap
                  </Link>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={2} sm={6}>
              <Box
                sx={{
                  py: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: {
                    md: "flex-start",
                    sm: "center",
                    xs: "flex-start",
                  },
                  flexDirection: "column",
                  alignItems: {
                    sm: "center",
                    md: "flex-start",
                    xs: "flex-start",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#48007C",
                    mb: 2,
                  }}
                >
                  Build
                </Typography>
                <Stack spacing={3} direction="column">
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                      Pact language resources
                    </Typography>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Useful tools
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Quickstart
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Pact developer tutorials
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Chat on Discord
                  </Link>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={2} sm={6}>
              <Box
                sx={{
                  py: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: {
                    md: "flex-start",
                    sm: "center",
                    xs: "flex-start",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#48007C",
                    mb: 2,
                    mr: { md: 0, sm: 9, xs: 0 },
                  }}
                >
                  Apply
                </Typography>
                <Stack spacing={3} direction="column">
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                      Grants
                    </Typography>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Developer program
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Ambassadors
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Careers
                  </Link>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={2} sm={6}>
              <Box
                sx={{
                  py: 2,
                  p: 2,
                  display: "flex",
                  justifyContent: "center",

                  flexDirection: "column",
                  alignItems: {
                    md: "flex-start",
                    sm: "center",
                    xs: "flex-start",
                  },
                  // textALign: "center",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#48007C",
                    mb: 2,
                    ml: { md: 0, sm: -4, xs: 0 },
                  }}
                >
                  Links
                </Typography>
                <Stack spacing={3} direction="column">
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontWeight: 500,
                        fontSize: "18px",
                        color: "#000",
                      }}
                    >
                      About
                    </Typography>
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Team
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    Whitepapers
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
