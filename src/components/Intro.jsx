import React from 'react';

// MUI Imports

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"
import useTheme from '@mui/material/styles'

const Intro = () => {

    return(
        <Box width="50%" justifyContent="center">
        <Typography variant="h2">
          Hello, my name is <Typography variant="h1">
            Jordan Wegener
          </Typography>{" "}
          and I'm a <Typography variant="h1">Software Engineer</Typography>
        </Typography>
        <Button variant='primary'>Say hello</Button>
      </Box>
    )
}

export default Intro;