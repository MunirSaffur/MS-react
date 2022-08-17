import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { Skeleton, Stack } from '@chakra-ui/react'
import ProductItem from './ProductItem'
import Pagination from './Pagination';



const ProductList = () => {
    const ProductsData = useSelector(state => state.productsData);
    const filteredProducts = useSelector(state => state.filteredProducts);
    // pagination handling
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const lastProductIndex = perPage * currentPage;
    const firstProductIndex = lastProductIndex - perPage;
    const paginatedFilteredProducts = filteredProducts?.slice(firstProductIndex, lastProductIndex)

    return (
        <div className='container'>
            <div className='row'>
                {ProductsData.length < 1 ?
                    [1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className='col-md-2 mt-3'>
                            <Stack>
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                            </Stack>
                        </div>
                    )) :
                    filteredProducts?
                    filteredProducts.length ? 
                    paginatedFilteredProducts.map((product, index) => (<div  key={index} className='col-6 col-md-3'><ProductItem productData={product} /></div>)):
                    <div>No Data To Show</div>:
                    ProductsData.map((product, index) => (<div  key={index} className='col-6 col-md-3'><ProductItem productData={product} /></div>))
                    }
            </div>
            <Pagination
                totalPosts={filteredProducts?.length}
                postsPerPage={perPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}

export default ProductList;