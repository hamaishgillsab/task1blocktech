import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

let Data = [
  {
    id: 2,

    name: "Publishing new token economics document",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,

    name: "Launching Kadenaswap “Bountyswap” on mainnet",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

const RoadMapsec11 = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={4} sm={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                boxShadow: "0px 0px 28px 0px #00000040",
                borderRight: "7px solid rgba(136,0,255,1)",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Lato",

                  fontWeight: 900,
                  // fontSize: "24px",
                  fontSize: { md: "24px", sm: "22px", xs: "18px" },

                  color: "#000000",
                  mt: 4,
                }}
              >
                November 2021
              </Typography>
            </Box>
          </Grid>

          <Grid item md={8} sm={8} xs={12}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                mt: { md: 0, sm: 0, xs: 5 },
              }}
              gap={2}
            >
              {Data.map((a, i) => (
                <Accordion
                  key={i}
                  sx={{
                    boxShadow: "0px 0px 28px 0px #00000040",
                  }}
                  expanded={expanded === a.id}
                  onChange={handleChange(a.id)}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === a.id ? (
                        <RemoveIcon
                          sx={{ color: "#AD00FF" }}
                          onClick={() => setExpanded(false)}
                        />
                      ) : (
                        <AddIcon
                          sx={{ color: "#AD00FF" }}
                          onClick={() => setExpanded(true)}
                        />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",

                        fontWeight: 900,
                        // fontSize: "22px",
                        fontSize: { md: "22px", sm: "20px", xs: "18px" },

                        color: "##000000",
                      }}
                    >
                      {a.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Lato",

                        fontWeight: 400,
                        // fontSize: "16px",
                        fontSize: { md: "16px", sm: "15px", xs: "14px" },

                        color: "#000",
                      }}
                    >
                      {a.detail}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RoadMapsec11;
