import { createStyles, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      fontSize: 19
    },
    small: {
      color: palette.text.secondary
    }
  })
);

export default useStyles;
