import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const ItemListContainer = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      position: "fixed",
      zIndex: "999",
      overflow: "show",
      margin: "auto",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: "50px",
      height: "50px"
    }
  }));
  const classes = useStyles();
  const [products, setProducts] = useState();

  const url = "https://fakestoreapi.com/products/";
  useEffect(() => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <Container fixed>
      {products ? (
        <ItemList products={products}> </ItemList>
      ) : (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
    </Container>
  );
};

export default ItemListContainer;
