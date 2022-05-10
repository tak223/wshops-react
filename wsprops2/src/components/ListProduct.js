import React from 'react'
import { ProductCard } from './ProductCard'

export const ListProduct = (props) => {
 
  return (
      <div>
       
   {props.list.map((el,i)=> <ProductCard el={el}  handelprix ={props.handelprix}/>
        
        )}
      </div>
  )
}
