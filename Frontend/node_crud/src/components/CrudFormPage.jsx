import * as React from "react";
import { useState } from "react";
import { TextField, Button, Divider, Box } from "@mui/material";

const CrudFormPage = () => {
  const [state, setState] = useState();

  const getDataValue = (val) => {
    setState(val);
  };
  return (
    <>
      <React.Fragment>
        <Box border={4} borderColor="grey.500" p={2}>
          <h2>Crud Node</h2>
          <Box border={2} borderColor="text.primary" m={4} p={4}>
            <TextField
              id="filled-basic"
              className="name-field"
              label="Enter Name"
              variant="filled"
              value={state}
              onChange={setState}
            />
            <TextField
              id="filled-basic"
              className="email-field"
              label="Enter Email"
              variant="filled"
              value={state}
              onChange={setState}
            />
            <Divider />
            <Button variant="outlined" onClick={getDataValue}>
              Submit
            </Button>
          </Box>
        </Box>
      </React.Fragment>
    </>
  );
};
export default CrudFormPage;
