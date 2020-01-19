import React, { SFC } from "react";
import { Button, Box } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import useStyles from "./styles";

export interface PaginatorProps {
  disableNext: boolean;
  disablePrev: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
}

const Paginator: SFC<PaginatorProps> = ({
  disableNext,
  disablePrev,
  onClickNext,
  onClickPrev
}) => {
  const { root } = useStyles();
  return (
    <div className={root}>
      <Box mr={1}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          disabled={disablePrev}
          onClick={onClickPrev}
          startIcon={<ArrowLeft />}
        >
          Prev
        </Button>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disabled={disableNext}
        onClick={onClickNext}
        endIcon={<ArrowRight />}
      >
        Next
      </Button>
    </div>
  );
};

export default Paginator;
