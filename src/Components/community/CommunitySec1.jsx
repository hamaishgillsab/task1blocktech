import { Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import imag1 from "../../Assets/Vector1.png";
import imag2 from "../../Assets/Vector2.png";
import imag3 from "../../Assets/Vector3.png";
import imag4 from "../../Assets/Vector4.png";
import imag5 from "../../Assets/Vector5.png";
import imag6 from "../../Assets/Vector6 (2).png";

let Data = [
  {
    id: 1,
    img: imag1,
  },
  {
    id: 2,
    img: imag2,
  },
  {
    id: 3,
    img: imag3,
  },
  {
    id: 4,
    img: imag4,
  },
  {
    id: 5,
    img: imag5,
  },
  {
    id: 6,
    img: imag6,
  },
];

const Section3 = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid container spacing={5} direction={{}}>
          <Grid item md={6} sm={12} xs={12}>
            <Box sx={{ color: "#000", px: { md: 5, sm: 3, xs: 1 } }}>
              <Typography
                sx={{
                  fontSize: { md: "70px", sm: "50px", xs: "35px" },
                  fontWeight: 700,
                  color: "#48007C",
                  fontFamily: "Lato",
                  lineHeight: 1.3,
                }}
              >
                Lets Join Our Network Community
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "24px", sm: "22px", xs: "18px" },
                  fontWeight: 400,
                  color: "#000",
                  fontFamily: "Lato",
                  mt: 1.7,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #48007C 0%, #6100BF 100%);",
                borderRadius: 10,
                py: { md: 13, sm: 10, xs: 5 },
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  p: { md: 2, sm: 1, xs: 0 },
                }}
                direction="row"
                gap={10}
              >
                {Data.map((a, i) => (
                  <Box
                    key={i}
                    sx={{
                      border: "2px solid #FFFFFF",
                      p: 2,
                      boxShadow: "0px 0px 4px 0px #FFFFFF",
                      borderRadius: 5,
                    }}
                  >
                    <img src={a.img} style={{ width: "60px" }} alt="" />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section3;
