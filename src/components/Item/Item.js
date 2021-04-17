import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display: "inline-block",
      marginTop: '50px',
      marginLeft: '50px',
      height: "100%"
    },
});

function Item({product}) {
    const classes = useStyles();
    console.log(product)
    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.description}
              height="400"
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.price} {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Compartir
            </Button>
            <Button size="small" color="primary">
              Leer mas
            </Button>
          </CardActions>
        </Card>
      );
}

export default Item
