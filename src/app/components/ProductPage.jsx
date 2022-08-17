import React from 'react'
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-4'>
          <img src={data.image.src} />
        </div>
        <div className='col-md-8'>
          <h1 className='bold h1'>{data.title}</h1>
          <h4 className='text-danger mb-2'><strong>{data.variants[0].price}$</strong></h4>
          <p><strong>Description: </strong>{data.body_html.replace(/<[^>]+>/g, '')}</p>
          <p><strong>Product Type: </strong>{data.product_type}</p>
          <p><strong>Availability: </strong>{data.status}</p>
          <p><strong>Vendor: </strong>{data.vendor}</p>
          <p><strong>{data.options[0].name}: </strong>{data.variants.map((variant, index) => <span key={index} className='badge bg-warning mx-2'>{variant.option1}</span>)}</p>
          {data.options[1] ?
          <p><strong>{data.options[1].name}: </strong>{data.variants.map((variant, index) => <span key={index} className='badge bg-warning mx-2'>{variant.option2}</span>)}</p>:
          <p></p>}

        </div>
      </div>
    </div>
  )
}
