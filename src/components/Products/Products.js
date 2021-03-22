import React from 'react'
import Grid from '@material-ui/core';
import Product from './Product';

const Products = [
    { id: 1, name: 'shoes', description: 'Running shoes', price: 12},
    { id: 2, name: 'Macbook', description: 'apple macbook pro', price: 120},
    { id: 3, name: 'Bag', description: 'leather bag', price: 250},
]

export const  Products = () => {

    return (
        <main>
            <Grid container jusitfy="center" spacing={4}>
                {Products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products