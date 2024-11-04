import React, { useState } from 'react';
import styles from "./Product.module.css" 
import { IProduct } from '../../models';

interface ProductProps {
	product: IProduct
	setCart: React.Dispatch<React.SetStateAction<number>>
}

export function Product({product, setCart}: ProductProps){
	const [details, setDetails] = useState(false)

	return (
		<div className={styles.product}>
			<img src={product.image} alt={product.title} className={styles.image}></img>
			<h2>{product.title}</h2>
			<p>{product.price}</p>
			<p>Rate: <span>{product.rating?.rate ?? 0}</span></p>
			<button onClick={() => setCart(prev => prev + 1)}>+</button>
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