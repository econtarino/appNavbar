import React, { useState } from 'react'
import Item from '../Item/Item'
import Grid from '@material-ui/core/Grid';
function ItemList({products}){
    console.log(products)
    return (
        <div style={{ display: "inline-block" }}>
            {
               products && products.map(p => <Item product={p} ></Item>) 
            }
            
        </div>
    )
}

export default ItemList
