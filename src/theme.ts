import { createMuiTheme } from "@material-ui/core";
import { grey, blueGrey, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500]
    },
    error: {
      main: red[600]
    },
    background: {
      default: grey[100]
    }
  },
  overrides: {
    MuiButton: {
      sizeLarge: {
        height: 50
      },
      contained: {
        borderRadius: 0,
        boxShadow: "none"
      },
      containedSecondary: {
        border: `1px solid ${grey[300]}`,
        backgroundColor: grey[50],
        color: grey[500],
        "&:disabled": {
          backgroundColor: grey[200]
        },
        "&:hover": {
          backgroundColor: grey[100]
        }
      }
    }
  }
});

export default theme;
