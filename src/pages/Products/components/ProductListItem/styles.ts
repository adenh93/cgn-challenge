import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    media: {
      height: 350,
      width: "100%"
    },
    header: {
      textTransform: "capitalize"
    },
    content: {
      color: palette.text.secondary,
      height: 40
    },
    footer: {
      borderTop: `1px solid ${grey[200]}`,
      padding: spacing(1)
    },
    progress: {
      marginLeft: "40%",
      marginTop: "50%"
    }
  })
);

export default useStyles;
