import React, { FormEvent, useState } from 'react'
import { IProduct } from '../../models'
import axios from 'axios'
import ErrorMesage from '../ErrorMessage/ErrorMesage'

const productData:IProduct = {
	title: 'test product',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count: 10
	}
}

interface CreateProductProps{
	onCreate: (product: IProduct) => void
}

export default function CreateProduct({onCreate}:CreateProductProps) {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const submitHandler = async (e:FormEvent) => {
		e.preventDefault()
		setError('')


		if( value.trim().length === 0){
			setError("enter value")
			return
		}
		productData.title = value;

		const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

		onCreate(response.data)
	}

	const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	return (
		<form onSubmit={submitHandler}>
			<input type='text' value={value} onChange={changeHandler}></input>
			{error && <ErrorMesage error={error}/>}
			<button type='submit'>Add</button>
		</form>
	)
}
