import React, { FormEvent, useState } from 'react'
import { IProduct } from '../../models'
import axios from 'axios'
import ErrorMesage from '../ErrorMessage/ErrorMesage'
import styles from "./CreateProduct.module.css"

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
    count: ''
  })
  const [error, setError] = useState('')

  const validateForm = () => {
    const { title, price, description, image, category, count } = formData

    if (!title.trim() || !price || !description.trim() || !image.trim() || !category.trim() || !count) {
      setError('Все поля должны быть заполнены.')
      return false
    }
    if (Number(price) <= 0 || Number(count) <= 0) {
      setError('Цена и количество должны быть положительными числами.')
      return false
    }
    setError('')
    return true
  }

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const productData: IProduct = {
      title: formData.title,
      price: Number(formData.price),
      description: formData.description,
      image: formData.image,
      category: formData.category,
      rating: {
        rate: 0,
        count: Number(formData.count)
      }
    }

    try {
      const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
      onCreate(response.data)
      setFormData({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
        count: ''
      })
    } catch (error) {
      setError('Ошибка при добавлении продукта.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {error && <ErrorMesage error={error} />}
      <label className={styles.label}>
        Название товара
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Цена
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="1"
        />
      </label>
      <label className={styles.label}>
        Описание
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Cсылка на фото
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Категория
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Количество
        <input
          type="number"
          name="count"
          value={formData.count}
          onChange={handleChange}
          required
          min="1"
        />
      </label>
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  )
}
