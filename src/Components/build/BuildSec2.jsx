import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

let Data = [
  {
    id: 1,
    name: "Quickstart",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Start Now",
  },
  {
    id: 2,
    name: "Explore dApp templates",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Start Now",
  },
  {
    id: 3,
    name: "View the source",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Start Now",
  },
  {
    id: 4,
    name: "Get the tools",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Start Now",
  },
];

const BuildSec2 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ mt: 6 }}>
      <Container>
        <Box>
          <Typography
            sx={{
              fontFamily: "Lato",

              fontWeight: 900,

              fontSize: { md: "48px", sm: "35px", xs: "25px" },

              color: "#48007C",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            Getting started is simple
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 5,
            px: { md: 10, sm: 5, xs: 1 },
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          gap={2}
        >
          {Data.map((a, i) => (
            <Accordion
              key={i}
              sx={{ boxShadow: "0px 0px 28px 0px #00000040", px: 2 }}
              expanded={expanded === a.id}
              onChange={handleChange(a.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#AD00FF" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    fontWeight: 900,

                    fontSize: { md: "24px", sm: "22px", xs: "16px" },

                    color: "#000",
                    fontFamily: "Lato",
                  }}
                >
                  {a.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Lato",

                    // fontSize: "18px",
                    fontSize: { md: "18px", sm: "16px", xs: "14px" },

                    color: "#000000",
                  }}
                >
                  {a.detail}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
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
                  }}
                >
                  {a.button}
                </Button>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BuildSec2;
