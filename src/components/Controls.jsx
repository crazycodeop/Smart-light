import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  Slider,
  ListItemIcon,
} from "@mui/material";
import Navbar from "./Navbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function LightControlCard() {
  const [toggleState, setToggleState] = React.useState(false);
  const [intensity, setIntensity] = React.useState(50);
  const [temperature, setTemperature] = React.useState(50);

  const handleToggleChange = (event) => {
    console.log(event.target.checked);
    setToggleState(event.target.checked);
  };

  const valueIntensity = (value) => {
    setIntensity(value);
    console.log(intensity);
  };

  const valueTemp = (value) => {
    setTemperature(value);
    console.log(temperature);
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <>
      <Navbar />
      <Card
        sx={{
          width: "240px",
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
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "Verdana" }}
          >
            Controls
          </Typography>
          {/* <div style={{ display: "flex", alignItems: "center" }}>
            <Switch checked={toggleState} onChange={handleToggleChange} />
          </div> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1.4 }}
                  checked={toggleState}
                  onChange={handleToggleChange}
                />
              }
              label=""
            />
            <ListItemIcon>
              <LightbulbIcon
                sx={{ color: toggleState ? "yellow" : "inherit" }}
              />
            </ListItemIcon>
          </div>
          <Typography variant="body2" color="text.secondary">
            Intensity
          </Typography>
          <Slider
            aria-label="Intensity"
            defaultValue={30}
            getAriaValueText={valueIntensity}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
          <Typography variant="body2" color="text.secondary">
            Temperature
          </Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valueTemp}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default LightControlCard;
