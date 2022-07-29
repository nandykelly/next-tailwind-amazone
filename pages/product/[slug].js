import React from 'react'
import Layout from '../../components/Layout'
import {useRouter} from 'next/router'
import data from '../../utils/data'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductScreen() {
   const {query} = useRouter()
   const {slug} = query
   const product = data.products.find(x => x.slug === slug)
   if(!product){
    return <div>produit introuvable</div>
   }
   console.log(query);
   const {image,name,brand,category,description,rating,numReviews}=product
  return (
 
   <Layout title={name}>
      <div className="-y-2">
         <Link href="/"><a className='button-primary'>Revenir</a></Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
         <div className="md:col-span-2">
           <Image
            src={image}
            alt={name}
            width={640}
            height={640}
            layout="responsive"
           ></Image>
         </div>
         <div>
            <ul className='list'>
               <li><h1 className='text-lg'>{name}</h1></li>
               <li>Categorie : {category}</li>
               <li>Brand : {brand}</li>
               <li>Categorie : {rating} sur {numReviews} reviews</li>
               <li>Description : {description}</li>
            </ul>
         </div>
         <div className="card p-5">
            
         </div>
      </div>
   </Layout>
  )
}
