import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import chart from "../../img/top10_chart.png";

export default function Secondpage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="secondpageContainer">
        <Grid container className="top10">
          <Grid item xs={8} className="top10ChartWrapper">
            <img
              className="top10Chart"
              src={chart}
              alt=""
              width="100%"
              height="80%"
            />
          </Grid>
          <Grid item xs={4} className="top10TextWrapper">
            <Typography className="top10Text" variant="h4">
              Starts with
            </Typography>
            <Typography className="top10Text" variant="h4">
              Top 10 Cocktails
            </Typography>
            <Box className="buttonBox">
              <Button
                variant="contained"
                className="top10Button"
                onClick={() => {
                  navigate("./dictionary/top10");
                }}
              >
                Explore
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
