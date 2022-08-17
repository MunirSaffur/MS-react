import { combineReducers } from '@reduxjs/toolkit';
import fetchProducts_RED from './FetchProducts_RED';
import filterProducts_RED from './FilterProducts_RED';

const AllReducers = combineReducers({
    productsData: fetchProducts_RED,
    filteredProducts: filterProducts_RED
})

export default AllReducers;
