import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const EditableCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNode, setEditedNode] = useState('');
//   const [controlledNode, setControlledNode] = useState('Initial Value');

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedNode(controlledNode);
  };

  const handleSaveClick = () => {
    props.setcontrolledNode(editedNode);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedNode(e.target.value);
  };

  return (
    <Card
      sx={{
        width: '240px',
        height: 'auto',
        boxShadow: 'none',
        borderRadius: 2,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        border: '1px solid lightblue',
        margin: '20px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontFamily: 'Verdana' }}>
          Device: {props.controlledNode}
        </Typography>

        {isEditing ? (
          <>
            <Input
              value={editedNode}
              onChange={handleInputChange}
              autoFocus
            />
            <IconButton onClick={handleSaveClick} color="primary">
              Save
            </IconButton>
            <IconButton onClick={handleCancelClick} color="secondary">
              Cancel
            </IconButton>
          </>
        ) : (
          <IconButton onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default EditableCard;
