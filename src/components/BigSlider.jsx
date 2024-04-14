import React from "react";
import { Slider, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomSlider = styled(Slider)(({ theme }) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const BigSliderContainer = styled(Box)({
  width: "80vw",
  margin: "20px",
  borderRadius: "10px",
  padding: "20px",
  border: "1px solid lightblue",
});

const BigSlider = (props) => {
  return (
    <BigSliderContainer sx={{ ml: 4, width: '50%' }}>
      <Typography variant="h4">Room Control</Typography>
      <CustomSlider
        defaultValue={props.grpIntensity}
        getAriaValueText={props.grpSliderIntensity}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom"
      />
    </BigSliderContainer>
  );
};

export default BigSlider;
