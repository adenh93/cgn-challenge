import React, { SFC } from "react";
import MuiAlert from "@material-ui/lab/Alert";

interface AlertProps {
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

const Alert: SFC<AlertProps> = ({ message, severity }) => {
  return (
    <MuiAlert variant="filled" severity={severity}>
      {message}
    </MuiAlert>
  );
};

export default Alert;
