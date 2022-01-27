import React from "react";

//Components 

import Nav from './Nav'

// MUI Imports

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import useTheme from "@mui/material/styles";

const Intro = () => {
  return (
    <Box>
    <Nav/>
      <Typography variant="h2" textAlign="center">
        Hello, my name is <Typography variant="h1">
          Jordan Wegener
        </Typography>{" "}
        and I'm a <Typography variant="h1">Software Engineer</Typography>
      </Typography>

      <Button variant="primary">Say hello</Button>
    </Box>
  );
};

export default Intro;
