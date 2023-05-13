import { Alert, AlertTitle, Box } from "@mui/material";
import React from "react";

function Confirmation() {
  return (
    <Box m="90px auto" width="80%" height="50ch">
      <Alert severity="success">
        <AlertTitle>
          <strong>Congratulations!- </strong> Your Order is Successful
        </AlertTitle>
      </Alert>
    </Box>
  );
}

export default Confirmation;
