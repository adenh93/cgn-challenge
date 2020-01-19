import React, { SFC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

interface HeaderProps {
  title: string;
}

const Header: SFC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
