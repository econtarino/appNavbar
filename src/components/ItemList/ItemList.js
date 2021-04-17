import React from 'react'
import Item from '../Item/Item'
function ItemList({products}){
    return (
        <>
        {
            products.map(p => <Item product={p} ></Item>) 
        }
            
        </>
    )
}

export default ItemList
