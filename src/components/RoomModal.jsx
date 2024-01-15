import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import image from '../assets/light-room.jpg';
import Divider from '@mui/material/Divider';

export default function RoomModal() {
  const [open, setOpen] = React.useState(false);
  const [roomName, setRoomName] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(roomName);
    const newCard = {
        id: Date.now(),
        room: roomName,
    };
    setCards((prevCards) => [...prevCards, newCard]);
    handleClose();
  };

  const handleSubmitChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{ mt: 0 }}
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
      <Grid container spacing={2} sx={{ mt: 1, width: '100%' }}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={6} lg={6}>
            <Card 
            sx={{
                cursor: 'pointer',
                width: '200px',
                height: 'auto',
                boxShadow: 'none',
                borderRadius: 2,
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                border: '1px solid lightblue', // Add thin black border
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              <CardContent>
                <img src={image} alt="Your Image" 
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Divider sx={{ margin: '8px 0' }} />
                <Typography variant="body2"
                sx={{ fontWeight: 'bold', fontSize: '16px', fontFamily: 'Verdana' }}
                >{card.room}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
