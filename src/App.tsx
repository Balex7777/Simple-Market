import { Product } from './components/Product/Product';
import styles from "./App.module.css"
import { useProducts } from './hooks/products';
import Loader from './components/Loader/Loader';
import ErrorMesage from './components/ErrorMessage/ErrorMesage';
import Modal from './components/Modal/Modal';
import CreateProduct from './components/CreateProduct/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';
import Header from './components/Header/Header';

function App() {
	const {loading, error, products, addProduct} = useProducts()
	const [modal, setModal] = useState(false)
	const [cart, setCart] = useState(0)

	const createHandler = (product:IProduct) => {
		addProduct(product)
		setModal(false)
	}

  return (
		<>
			<Header cart={cart}/>
			<button onClick={() => setModal(true)}>Add product</button>
			<section className={styles.container}>
				{loading && <Loader />}
				{error && <ErrorMesage error={error}/>}
				{products.map(product => <Product product={product} key={product.id} setCart={setCart}/>)}
			</section>
			{modal && 
			<Modal title="Create product" onClose={() => setModal(false)}>
				<CreateProduct onCreate={createHandler}></CreateProduct>
			</Modal>
			}
		</>
  );
}

export default App;
