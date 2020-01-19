import React, { SFC, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
  Fade
} from "@material-ui/core";
import useStyles from "./styles";

export interface ProductItemProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductListItem: SFC<ProductItemProps> = ({
  title,
  description,
  price,
  image
}) => {
  const { media, header, content, footer, progress } = useStyles();
  const [loaded, setLoaded] = useState<boolean>(false);

  const imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <CircularProgress thickness={2} className={progress} size={100} />
      )}
      <Fade in={loaded}>
        <Card elevation={3}>
          <img
            className={media}
            src={image}
            alt="product thumbnail"
            onLoad={imageLoaded}
          />
          <CardContent>
            <Typography className={header} variant="h6">
              {title}
            </Typography>
            <Typography className={content} variant="body1">
              {description}
            </Typography>
          </CardContent>
          <CardActions className={footer}>
            <Button size="medium" variant="contained" color="secondary">
              View Details
            </Button>
            <Button size="medium" variant="contained" color="primary">
              {price ? `Buy for $${price.toFixed(2)}` : "Free!"}
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </>
  );
};

export default ProductListItem;
