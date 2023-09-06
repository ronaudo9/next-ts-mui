"use client";

import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from '@mui/material/IconButton';



const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography  sx={{ flex: 1,cursor: 'pointer' }}>
          Anthony sistilli
        </Typography>
        <IconButton sx={{ cursor: 'pointer' }}>
        <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
