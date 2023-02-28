import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Data = [
  {
    name: "Rapid launch",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    name: "A smart contract first",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    name: "Powered by Pact",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

const BuildSec3 = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Container>
        <Box sx={{ p: 5, textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Lato",

              fontWeight: 900,

              fontSize: { md: "48px", sm: "35px", xs: "25px" },

              color: "#48007C",
              lineHeight: 1.1,
            }}
          >
            Case study
          </Typography>
        </Box>

        <Box
          sx={{
            borderTop: "8px solid rgba(136,0,255,1)",

            boxShadow: "0px 0px 11px 0px #00000040",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {Data.map((a, i) => (
            <Box key={i} sx={{ px: { md: 10, sm: 6, xs: 2 } }}>
              <Typography
                sx={{
                  fontFamily: "lato",

                  fontWeight: 900,

                  fontSize: { md: "28px", sm: "21px", xs: "16px" },

                  color: "#48007C",
                  mt: 5,
                }}
              >
                {a.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "lato",
                  fontWeight: 400,

                  fontSize: { md: "18px", sm: "16px", xs: "14px" },

                  color: "#000000",
                }}
              >
                {a.detail}
              </Typography>
            </Box>
          ))}
          <Button
            variant="contained"
            sx={{
              fontSize: "13px",
              fontWeight: 900,
              color: "#fff",
              fontFamily: "Lato",
              borderRadius: 5,
              background:
                "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
              px: 5,
              mt: 5,
              mb: 4,
            }}
          >
            Visit Site
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BuildSec3;
