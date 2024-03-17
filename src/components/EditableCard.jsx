import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const EditableCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNode, setEditedNode] = useState("");
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
        width: "240px",
        height: "auto",
        ml: 4,
        mt: 2,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        border: "1px solid lightblue",
        // backgroundColor: "rgba(0, 0, 0, 0.05)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontFamily: "Verdana" }}>
          Device: {props.controlledNode}
        </Typography>
        {isEditing ? (
          <>
            <Input value={editedNode} onChange={handleInputChange} autoFocus />
            <IconButton
              onClick={handleSaveClick}
              color="info"
              sx={{ fontSize: "19px", color: "black", fontFamily: "Verdana" }}
            >
              Save
            </IconButton>
            <IconButton
              onClick={handleCancelClick}
              color="info"
              sx={{ fontSize: "19px", color: "black", fontFamily: "Verdana" }}
            >
              Cancel
            </IconButton>
          </>
        ) : (
          <IconButton onClick={handleEditClick} sx={{ marginTop: "6px", padding: "0px"  }}>
            <AddIcon
              sx={{
                border: "1px solid lightblue",
                borderRadius: "50%",
                fontSize: "35px",
              }}
            />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default EditableCard;
