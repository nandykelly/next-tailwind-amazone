/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function ProductItem({product}) {
    const {slug,image,name,brand,price}= product
  return (
    <div className="card">
        <Link href={`/product/${slug}`}> 
              <a>
                    <img src={image} alt={name} className="rounded shadow" />
              </a>
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${slug}`}> 
        <a>

        <h2 className="text-large">
                {name}
            </h2>
        </a>
        
        </Link>    
        <p className="mb-2">
            {brand}
            </p> 
            <p>{price}</p>   
            <button className='primary-button' type="button">Add to cart</button>
        </div>
    </div>
  )
}
