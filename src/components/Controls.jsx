import React,{useEffect,useState} from "react";
import {
  Card,
  CardContent,
  Typography,
  Switch,
  Slider,
  ListItemIcon,
  Grid
} from "@mui/material";
import Navbar from "./Navbar";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import BigSlider from './ BigSlider'
import EditableCard from "./EditableCard";
function LightControlCard() {
  const [firsttoggleState, setfirstToggleState] = React.useState(false);
  const [sectoggleState, setsecToggleState] = React.useState(false);
  const [firintensity, setfirIntensity] = React.useState(50);
  const [firtemperature, setfirTemperature] = React.useState(50);
  const [secintensity, setsecIntensity] = React.useState(50);
  const [sectemperature, setsecTemperature] = React.useState(50);
  const [data, setData] = React.useState(null);
  const [socket, setSocket] = React.useState(null);
  const [userInput, setUserInput] = useState(0);
  const  [masteronline,setmasteronline]=useState(false)
  const [notificationId, setNotificationId] = useState(null);
  const [newDeviceAdded,setnewDeviceAdded]=useState(false)
  const[grpIntensity,setgrpIntensity]=useState(0)
  const [controlledNode,setcontrolledNode]=useState(0)
  var currentControlType;
  useEffect(() => {
    // This block will be executed whenever intensity or temperature changes
    var inten,temp;
    if(currentControlType===0){
      inten=firintensity
      temp=firtemperature
    }
    else{ 
      inten=secintensity
      temp=sectemperature
    }
    axios.post('http://localhost:5002/setUpVal', {
      intensity: inten,
      temperature: temp,
      controlType: currentControlType,
    })
    .then(response => {
      console.log(response.data); // Assuming the server sends back a success message
    })
    .catch(error => {
      console.error(error);
    });
  }, [firintensity, firtemperature,secintensity,sectemperature]); // The effect depends on intensity and temperature

  useEffect(() => {
    // This block will be executed whenever intensity or temperature changes
    axios.post('http://localhost:5002/setUpVal', {
      intensity: grpIntensity,
      controlType: 3,
    })
    .then(response => {
      console.log(response.data); // Assuming the server sends back a success message
    })
    .catch(error => {
      console.error(error);
    });
  }, [grpIntensity]); 

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:5002'); // Replace with your server URL

    newSocket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);

      
       // Check the type of alert and show corresponding toast
       if (data.alertType === 'promptNumber') {
        showPromptNumberToast(data);

      } 
      else if(data.alertType==='masterOnline'){
        console.log('Data Message:', data.message);

if (data.message === 'online') {
  // Your success toast and logic
  console.log('Master Online');
  toast.success(`Master Online`, {
    position: 'top-right',
    autoClose: 5000,
  });
  setmasteronline(true);
} else {
  // Your error toast and logic
  console.log('Master Offline');
  toast.error(`Master offline`, {
    position: 'top-right',
    autoClose: 5000,
  });
  setmasteronline(false);
}
        }
      
      else if (data.alertType === 'success') {
        showSuccessToast(data);
        setnewDeviceAdded(true)
      } else if (data.alertType === 'failure') {
        showFailureToast(data);
      }
    });

   
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);
const showPromptNumberToast = (data) => {
   // Display a notification with an input field
   const dataobje=JSON.parse(data.message)
   const notification = toast.info(
    <div>
      <p>{`New Device Discovered: DeviceId:-${dataobje.deviceUuid}`}</p>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
    </div>,
    {
      position: 'top-right',
      autoClose: 15000, // Auto-close the notification after 15 seconds
    }
  );

  // Save the notification ID to close it later
  setNotificationId(notification);
  };

  const showSuccessToast = (data) => {
    toast.success(`Success: ${data.message}`, {
      position: 'top-right',
      autoClose: 5000, // Auto-close the success toast after 5 seconds
    });
  };

  const showFailureToast = (data) => {
    toast.error(`Failure: ${data.message}`, {
      position: 'top-right',
      autoClose: 5000, // Auto-close the failure toast after 5 seconds
    });
  };


  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      // When "Enter" key is pressed, send the user's input back to the backend
      console.log("user:", userInput);
      setUserInput((prevUserInput) => {
        handleNotificationInteraction(prevUserInput);
      //  he input field after sending
      });
      toast.dismiss(notificationId);
    }
  };

  const handleNotificationInteraction = (number) => {
    // Send the user's input back to the backend
    console.log("num:",parseInt(number));
    axios.post('http://localhost:5002/setUnicast', {
      unicastAddr: parseInt(number)
    })
    .then(response => {
      console.log(response.data); // Assuming the server sends back a success message
    })
    .catch(error => {
      console.error(error);
    });
  };
  const handleToggleChange = (event,type) => {
    var togglePosition=event.target.checked
    axios.post('http://localhost:5002/setUpVal', {
      intensity: togglePosition?60:0,
      temperature: 0,
      controlType:type
    })
    .then(response => {
      console.log(response.data); // Assuming the server sends back a success message
    })
    .catch(error => {
      console.error(error);
    });
    if(type===0)
    setfirstToggleState(togglePosition);
  else
  setsecToggleState(togglePosition);
  

  };

  const valueIntensity = (value,type) => {
    currentControlType = type;
    if(type===0)
    setfirIntensity(value);
    else
    setsecIntensity(value);
    // currentControlType = type;
    // console.log(intensity);
  };
  const grpSliderIntensity = (value) => {
    setgrpIntensity(value);
   
  };

  const valueTemp = (value,type) => {
    currentControlType = type;
    if(type===0 ){
      setfirTemperature(value);
    }else {
      setsecTemperature(value);
    }
   
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
    <BigSlider grpSliderIntensity={grpSliderIntensity} grpIntensity={grpIntensity}/>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Card
        sx={{
          width: "240px",
          height: "auto",
          boxShadow: "none",
          borderRadius: 2,
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          border: "1px solid lightblue", // Add thin black border
          margin: '20px',
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
            BLE Node:-0
          </Typography>
          {/* <div style={{ display: "flex", alignItems: "center" }}>
            <Switch checked={toggleState} onChange={handleToggleChange} />
          </div> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1.4 }}
                  checked={firsttoggleState}
                  onChange={(event) => handleToggleChange(event, 0)}
                />
              }
              label=""
            />
            <ListItemIcon>
              <LightbulbIcon
                sx={{ color: firsttoggleState ? "red" : "inherit" }}
              />
            </ListItemIcon>
          </div>
          {masteronline ?
          <div>
          <Typography variant="body2" color="text.secondary">
            intensity
          </Typography>
          <Slider
            aria-label="Intensity"
            defaultValue={30}
            getAriaValueText={(value) => valueIntensity(value, 2)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
          <Typography variant="body2" color="text.secondary">
            temperature
          </Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={(value) => valueTemp(value, 0)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          /> </div>:<div><Typography color={"red"}>🔴 Not available</Typography></div>

}
        </CardContent>
      </Card>
  
      
     {newDeviceAdded?  <Card
        sx={{
          width: "240px",
          height: "auto",
          boxShadow: "none",
          borderRadius: 2,
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          border: "1px solid lightblue", // Add thin black border
          margin: '20px',
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
            BLE Node:-1
          </Typography>
          
          {/* <div style={{ display: "flex", alignItems: "center" }}>
            <Switch checked={toggleState} onChange={handleToggleChange} />
          </div> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1.4 }}
                  checked={sectoggleState}
                  onChange={(event) => handleToggleChange(event, 1)}
                />
              }
              label=""
            />
            <ListItemIcon>
              <LightbulbIcon
                sx={{ color: sectoggleState ? "yellow" : "inherit" }}
              />
            </ListItemIcon>
          </div>

          {masteronline ?
            <div>
          <Typography variant="body2" color="text.secondary">
            intensity
          </Typography>
          <Slider
            aria-label="Intensity"
            defaultValue={30}
            getAriaValueText={(value) => valueIntensity(value, 1)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
          <Typography variant="body2" color="text.secondary">
            temperature
          </Typography>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={(value) => valueTemp(value, 1)}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          /></div>:<div><Typography color={"red"}>🔴 Not available</Typography></div>}
        </CardContent>
      </Card> :<></>}
</div>
     <div>
     <Typography variant="h4">Controllers</Typography>
     <EditableCard  controlledNode={controlledNode} setcontrolledNode={setcontrolledNode}/>
     
     </div>
      <ToastContainer />
    </>
  );
}

export default LightControlCard;
