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

const Data = [
  {
    id: 1,
    name: "Key concepts",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Stay Safe",
  },
  {
    id: 2,
    name: "Wallets",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Stay Safe",
  },
  {
    id: 3,
    name: "Exchanges",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    button: "Stay Safe",
  },
];

const CommunitySec4 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ mt: 15 }}>
      <Container>
        <Box sx={{ px: { md: 15, sm: 10, xs: 1 } }}>
          <Typography
            sx={{
              fontFamily: "Lato",
              // fontSize: "48px",
              fontSize: { md: "48px", sm: "35px", xs: "25px" },

              fontWeight: 900,
              color: "#48007C",
              textAlign: "center",
            }}
          >
            Get App
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lato",
              // fontSize: "24px",
              fontSize: { md: "24px", sm: "20px", xs: "18px" },

              fontWeight: 400,
              color: "#000000",
              textAlign: "center",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    fontWeight: 900,
                    // fontSize: "24px",
                    fontSize: { md: "24px", sm: "20px", xs: "16px" },

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

export default CommunitySec4;
