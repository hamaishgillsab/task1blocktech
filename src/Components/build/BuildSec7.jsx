import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import group57 from "../../Assets/Group57.png";

const Data = [
  {
    id: 1,
    name: "Chainweaver (wallet & workbench)",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,

    name: "Chainweaver macOS",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,

    name: "Chainweaver Linux",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,

    name: "Chainweaver Windows",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,

    name: "Chainweaver user guide",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 6,

    name: "Atom IDE",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 7,

    name: "Block explorer",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 8,

    name: "Web transfer tools",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 9,

    name: "Balance checker",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const BuildSec7 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ mt: 5 }}>
      <Container>
        <Box sx={{ p: 5, textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontWeight: 900,
              // fontSize: "48px",
              fontSize: { md: "48px", sm: "35px", xs: "25px" },

              color: "#48007C",
            }}
          >
            Tools
          </Typography>
        </Box>

        <Box
          sx={{
            px: { md: 10, sm: 8, xs: 1 },
            display: "flex",
            justifyContent: "space-betweeen",
            flexDirection: "column",
          }}
          gap={3}
        >
          {Data.map((a, i) => (
            <Accordion
              key={i}
              sx={{ boxShadow: "0px 0px 28px 0px #00000040" }}
              expanded={expanded === a.id}
              onChange={handleChange(a.id)}
            >
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon sx={{ color: "#48007C" }} />}
                expandIcon={
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={group57}
                    alt=""
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 900,
                    // fontSize: "24px",
                    fontSize: { md: "24px", sm: "22px", xs: "16px" },

                    color: "#000",
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
                    // fontSize: "18px",
                    fontSize: { md: "18px", sm: "16px", xs: "14px" },

                    color: "#000000",
                  }}
                >
                  {a.detail}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BuildSec7;
