import React from 'react'
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export default function ProductItem({ productData }) {
    return (
        <Card className='mt-4'>
            <Card.Img height="100" className="cardImg" src={productData.image.src} />
            <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text className='text-danger h5'>{productData.variants[0].price}$</Card.Text>
                <Link className="btn btn-primary" to={{
                    pathname: `/product/${productData.id}`,
                    state: productData
                }}>Show Details</Link>
            </Card.Body>
        </Card>

    )
}
