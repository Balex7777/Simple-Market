import axios, { AxiosError } from 'axios';
import { IProduct } from '../models';
import { useEffect, useState } from 'react';

export function useProducts(){
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	async function fetchProducts() {
		try{
			setError('')
			setLoading(true)
			const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7')
			setLoading(false)
			setProducts(response.data)
		}catch (e: unknown){
			const error = e as AxiosError;
			setLoading(false)
			setError(error.message)
		}
		
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return {loading, error, products}
}