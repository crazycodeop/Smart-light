import React,{useEffect} from "react";
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
import axios from 'axios'


function LightControlCard() {
  const [toggleState, setToggleState] = React.useState(false);
  const [intensity, setIntensity] = React.useState(50);
  const [temperature, setTemperature] = React.useState(50);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    // This block will be executed whenever intensity or temperature changes
    axios.post('http://localhost:5002/setUpVal', {
      intensity: intensity,
      temperature: temperature,
    })
    .then(response => {
      console.log(response.data); // Assuming the server sends back a success message
    })
    .catch(error => {
      console.error(error);
    });
  }, [intensity, temperature]); // The effect depends on intensity and temperature

  useEffect(() => {
    const socket = new WebSocket('wss://localhost:5002/'); // Replace with your server URL

    // websocket.onopen = () => {
    //   console.log('connected');
    // }

    socket.addEventListener('message', (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);

      // You can customize this part to show an alert or update your UI as needed
      alert(`New data received - Intensity: ${newData.intensity}, Temperature: ${newData.temperature}`);
    });

    return () => {
      socket.close();
    };
  }, []);



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
  console.log(value); // Use the argument directly, not the state variable
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
