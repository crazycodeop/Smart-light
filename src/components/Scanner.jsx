import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "16px",
});

const StyledButton = styled(Button)({
  marginBottom: "16px",
});

const Spinner = styled(CircularProgress)({
  marginTop: "16px",
});

const Device = styled("div")({
  marginTop: "8px",
});

const CancelButton = styled(Button)({
  marginTop: "16px",
});

const Scanner = () => {
  const [devices, setDevices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      const testData = [
        { id: 1, name: "Device 1" },
        { id: 2, name: "Device 2" },
        { id: 3, name: "Device 3" },
      ];
      setDevices(testData);
      setLoading(false);
    }, 2000);
    // Code to search for nearby devices
    // Once the search is complete, update the 'devices' state and setLoading(false)
  };

  const handleCancel = () => {
    setLoading(false);
    // Code to cancel the search or reset the state
  };

  return (
    <Container>
      <StyledButton
        variant="contained"
        onClick={handleSearch}
        disabled={loading}
      >
        Search Devices
      </StyledButton>
      {loading && <Spinner />}
      {devices.map((device) => (
        <Device key={device.id}>{device.name}</Device>
      ))}
      {loading && (
        <CancelButton variant="outlined" onClick={handleCancel}>
          Cancel
        </CancelButton>
      )}
    </Container>
  );
};

export default Scanner;
