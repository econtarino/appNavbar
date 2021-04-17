import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Container from '@material-ui/core/Container'

const ItemListContainer = () => {
    const [ products , setProducts ] = useState([])

    const url = 'https://fakestoreapi.com/products/'
    useEffect( () => {
        fetch(url).then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            setProducts(data)
        })
    },[])



    return (
        <Container fixed>        
        <div>
            { products && <ItemList products={products}> </ItemList> }
        </div>
        </Container>
    )
}

export default ItemListContainer
