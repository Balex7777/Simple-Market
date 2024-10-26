import React, { useState } from 'react';
import "./Product.css"
import { IProduct } from '../../models';

interface ProductProps {
	product: IProduct
}

export function Product({product}: ProductProps){
	const [details, setDetails] = useState(false)

	return (
		<div className='product'>
			<img src={product.image} alt={product.title} className='product__image'></img>
			<h2>{product.title}</h2>
			<p>{product.price}</p>
			<button 
				className='product__button'
				onClick={() => setDetails(prev => !prev)}
			>
				{ details ? 'Hide details' : 'Show details'}
			</button>
			{details &&
			<div>
				<p>{product.description}</p>	
			</div>}
		</div>
	)
}