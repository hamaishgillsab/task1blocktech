import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

let Data = [
  {
    id: 1,
    name: "DeFi, NFT & Payments",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Build Now",
  },
  {
    id: 2,

    name: "Interop & Relays",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Build Now",
  },
  {
    id: 3,

    name: "Engineered for real-world use",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Build Now",
  },
  {
    id: 4,

    name: "Governance",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Build Now",
  },
];
const Section4 = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4} sm={12} xs={12}>
            <Box
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "70px", sm: "50px", xs: "35px" },
                  fontWeight: 900,
                  color: "#48007C",
                  fontFamily: "Lato",
                  lineHeight: 1.2,
                }}
              >
                The complete package
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "24px", sm: "22px", xs: "18px" },
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Lato",
                  mt: 2,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={8} sm={12} xs={12}>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                ml: { md: 5, sm: 2, xs: 0 },
                mt: 5,
              }}
              gap={3}
            >
              {Data.map((a, i) => (
                <Box
                  sx={{
                    boxShadow: "0px 0px 11px 0px #00000040",
                    width: "300px",
                    p: 2,
                    borderTop: "7px solid rgba(136,0,255,1)",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: "24px", sm: "22px", xs: "18px" },

                      fontWeight: 700,
                      color: "#48007C",
                      fontFamily: "Lato",
                    }}
                  >
                    {a.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "18px",

                      fontWeight: 400,
                      color: "#000",
                      fontFamily: "Lato",
                      mt: 1.7,
                    }}
                  >
                    {a.detail}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                      mt: 4,
                      px: 8,
                      borderRadius: 5,
                      fontFamily: "Lato",
                    }}
                  >
                    {a.button}
                  </Button>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
