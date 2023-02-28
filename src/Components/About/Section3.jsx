import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import imag1 from "../../Assets/image 1 (2).png";
import imag2 from "../../Assets/image 2 (2).png";
import imag3 from "../../Assets/image 3 (2).png";
import imag4 from "../../Assets/image 4 (2).png";
import imag5 from "../../Assets/image 5 (2).png";
import imag6 from "../../Assets/image 6 (2).png";
import imag7 from "../../Assets/image 7 (2).png";
import imag8 from "../../Assets/image 8 (2).png";
import imag9 from "../../Assets/image 9 (2).png";

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
  {
    id: 7,
    img: imag7,
  },
  {
    id: 8,
    img: imag8,
  },
  {
    id: 9,
    img: imag9,
  },
];

const Section3 = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid
          container
          spacing={5}
          direction={{ xs: "column-reverse", md: "row", sm: "column-reverse" }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                background: "#E5E5E5",
                borderRadius: 5,
                py: 3,
                px: 3,
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { md: "row", sm: "row", xs: "column" },
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                direction="row"
                gap={5}
              >
                {Data.map((a, i) => (
                  <Box
                    key={i}
                    sx={{ width: { md: "130px", sm: "150px", xs: "140px" } }}
                  >
                    <img src={a.img} style={{ width: "100%" }} alt="" />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                color: "#000",
                px: { md: 5, sm: 3, xs: 1 },
                mt: { xs: 8, md: 1, sm: 5 },
              }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: { md: "70px", sm: "50px", xs: "35px" },
                    fontWeight: 700,
                    color: "#48007C",
                    fontFamily: "Lato",
                    lineHeight: 1.1,
                  }}
                >
                  Our partners, your products
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: "Lato",
                    mt: 3,
                    borderRadius: 5,
                    background:
                      "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                    px: 8,
                  }}
                >
                  Build
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section3;
