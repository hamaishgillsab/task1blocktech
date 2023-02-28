import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Data = [
  {
    id: 1,
    name: "Run a node",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Plugin",
  },
  {
    id: 2,
    name: "Chain Relay",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Bond Now",
  },
  {
    id: 3,
    name: "DAO",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Join the DAO",
  },
  {
    id: 4,
    name: "Content creator",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: " Apply Today",
  },
  {
    id: 5,
    name: "Moderator",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: "  Apply Today",
  },
  {
    id: 6,
    name: "Community leader",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    button: "  Apply Today",
  },
];

const CommunitySec2 = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Box>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: { md: "70px", sm: "50px", xs: "35px" },
              fontWeight: 900,
              color: "#48007C",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Build from within
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {Data.map((a, i) => (
            <Grid item md={4} sm={6} xs={12}>
              <Box
                key={i}
                sx={{
                  mt: 5,
                  borderTop: "8px solid rgba(136,0,255,1)",
                  boxShadow: "0px 0px 11px 0px #00000040",
                  p: { md: 3, sm: 2, xs: 2 },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    // fontSize: "24px",
                    fontSize: { md: "24px", sm: "22px", xs: "18px" },

                    fontWeight: 700,
                    color: "#48007C",
                  }}
                >
                  {a.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    // fontSize: "18px",
                    fontSize: { md: "18px", sm: "16px", xs: "14px" },

                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  {a.detail}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: "Lato",
                    mt: 4,
                    borderRadius: 5,
                    background:
                      "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                    width: "200px",
                  }}
                >
                  {a.button}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunitySec2;
