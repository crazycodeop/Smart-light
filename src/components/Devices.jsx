import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

export default function ResponsiveGrid() {
  const [cards, setCards] = React.useState([]);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  width: "200px",
                  height: "auto",
                  boxShadow: "none",
                  borderRadius: 2,
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  border: "1px solid lightblue", // Add thin black border
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <CardContent>
                  <WbIncandescentIcon />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Verdana",
                    }}
                  >
                    Node name
                  </Typography>
                  <Typography>
                    🔴 Not available
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
