import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import fetchProducts_ACT from './actions/fetchProducts_ACT.js';
import { Switch, Route } from 'react-router-dom';
// components 
import Header from './components/Header'
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage.jsx';

export default function HomeScreen() {
  const dispatch = useDispatch()
  

  useEffect(() => {
    axios.get("https://teknasyon.netlify.app/.netlify/functions/products", {
      headers: {
        "X-Access-Token": "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"
      }
    }).then(res => {
      dispatch(fetchProducts_ACT(res.data.products))
    })
  }, [])
  return (
    <div>
      <Header />
      <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/product/:id" component={ProductPage} />
          </Switch>
    </div>
  )
}
