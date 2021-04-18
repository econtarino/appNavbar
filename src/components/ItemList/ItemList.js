import React, { useState } from "react";
import Item from "../Item/Item";
import Grid from "@material-ui/core/Grid";
function ItemList({ products }) {
  console.log(products);
  return (
    <Grid container style={{ marginTop: "50px" }} spacing={3}>
      { products &&
        products.map(p => (
          <Grid container item xs={4}>
            <Item product={p} />
          </Grid>
        ))}
    </Grid>
  );
}

export default ItemList;
