import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import sectionimg from "../../Assets/firstimgback.png";

const Section1 = (props) => {
  console.log(props);
  return (
    <>
      <Box sx={{ marginTop: 5 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { md: "120px", sm: "70px", xs: "40px" },
                color: "#6100BF",
                mb: { md: -4, sm: -3, xs: -1 },
                ml: 2,
                fontFamily: "Lato",
              }}
            >
              {props?.name ?? "Build the Future"}
            </Typography>
            <Box
              sx={{
                backgroundImage: `url(${props?.img ?? sectionimg})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                height: { md: "500px", sm: "350px", xs: "300px" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { md: "120px", sm: "70px", xs: "40px" },
                  color: "#FFFFFF",
                  fontFamily: "Lato",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { md: "120px", sm: "70px", xs: "40px" },
                    color: "#FFFFFF",
                    mt: -2,
                    ml: 2,
                    fontFamily: "Lato",
                  }}
                >
                  {props?.LiveMap ?? "on Name Here"}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Section1;
