import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import image from "../assets/light-room.jpg";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function RoomModal() {
  const { user } = useUser();
  const [open, setOpen] = React.useState(false);
  const [roomName, setRoomName] = React.useState("");
  const [rooms, setRooms] = React.useState([]);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/configuration");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(roomName);
    setRooms([...rooms, roomName]);

    // axios
    //   .post("http://localhost:5002/addRoom", {
    //     roomName: roomName,
    //     userEmail: user.emailAddresses[0].emailAddress,
    //   })
    //   .then((response) => {
    //     console.log(response.data); // Assuming the server sends back a success message
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    handleClose();
  };

  const handleSubmitChange = (event) => {
    setRoomName(event.target.value);
  };


  // React.useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5002/getAllRooms/${user.emailAddresses[0].emailAddress}`
  //       ); // Replace with the actual user's email
  //       setRooms(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchRooms();
  // }, []);

  return (
    <>
      <Button
        variant="outlined"
        sx={{ mt: 0, ml: 4 }}
        startIcon={<AddHomeIcon />}
        onClick={handleClickOpen}
      >
        Add Room
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Room Name</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Input"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleSubmitChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Done</Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={2} sx={{ mt: 1, width: "100%" }}>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <Grid item key={room.id} xs={12} sm={6} md={6} lg={6}>
              <Card
                sx={{
                  cursor: "pointer",
                  width: "200px",
                  height: "auto",
                  ml: 4,
                  boxShadow: "none",
                  borderRadius: 2,
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  border: "1px solid lightblue",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <CardContent>
                  <img
                    // src={room.image}
                    src={image}
                    alt="Your Image"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                    onClick={handleCardClick}
                  />
                  <Divider sx={{ margin: "8px 0" }} />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "16px",
                        fontFamily: "Arial",
                      }}
                    >
                      {room}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Box sx={{ mt: 1, ml: 6 }}>No rooms found!</Box>
        )}
      </Grid>
    </>
  );
}
