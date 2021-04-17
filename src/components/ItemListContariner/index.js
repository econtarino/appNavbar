import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [ products , setProducts ] = useState([])
    const url = 'https://fakestoreapi.com/products/'
    useEffect( () => {
        fetch(url).then((response) =>{
            Promise.resolve(response.json())
        }).then(response => {
            setProducts(response)
        })
    },[])



    return (
        <Container fixed>        
            <ItemList products={products}> </ItemList>
        </Container>
    )
}

export default ItemListContainer
