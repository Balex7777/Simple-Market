import React from 'react';
import { Product } from './components/Product/Product';
import { products } from './data/products';
import './App.css'

function App() {
  return (
		<>
			<header className='header'>
				<h1>Market</h1>
			</header>
			<section className='container'>
				<Product product={products[0]}/>
				<Product product={products[1]}/>
				<Product product={products[2]}/>
				<Product product={products[3]}/>
				<Product product={products[4]}/>
			</section>

		</>
  );
}

export default App;
