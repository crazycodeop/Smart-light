import React from 'react';
import { Slider, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomSlider = styled(Slider)({
  height: 8,
  color: (theme) => theme.palette.primary.main,
  '.MuiSlider-rail': {
    height: 8,
    opacity: 0.5,
    backgroundColor: (theme) => theme.palette.secondary.main,
  },
  // '.MuiSlider-thumb': {
  //   height: 15,
  //   width: 15,
  //   backgroundColor: 'white',
  //   border: '2px solid currentColor',
  //   marginTop: -8,
  //   marginLeft: -12,
  //   '&:hover': {
  //     boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)',
  //   },
  // },
  '.MuiSlider-valueLabel': {
    left: 'calc(-50% - 4px)',
  },
  '.MuiSlider-track': {
    height: 20,
    width: '100%',
    borderRadius: 4,
  },
});

const BigSlider = (props) => {
  return (
    <div style={{ width: '80vw', margin: '20px' }}>
      <Typography gutterBottom variant='h3'>Room Control</Typography>
      <CustomSlider
        defaultValue={props.grpIntensity}
        getAriaValueText={props.grpSliderIntensity}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider-custom"
      />
    </div>
  );
};

export default BigSlider;
