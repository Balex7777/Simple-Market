import React, { useState } from 'react';
import styles from "./Product.module.css" 
import { IProduct } from '../../models';

interface ProductProps {
	product: IProduct
}

export function Product({product}: ProductProps){
	const [details, setDetails] = useState(false)

	return (
		<div className={styles.product}>
			<img src={product.image} alt={product.title} className={styles.image}></img>
			<h2>{product.title}</h2>
			<p>{product.price}</p>
			<button 
				className={styles.button}
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