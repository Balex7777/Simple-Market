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
			
			<section className={styles.container}>
			<button onClick={() => setModal(true)} className={styles.button}>
				<svg className={styles.add} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
					<path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
				</svg>
			</button>
				{loading && <Loader />}
				{error && <ErrorMesage error={error}/>}
				<div className={styles.productList}>
					{products.map(product => <Product product={product} key={product.id} setCart={setCart}/>)}
				</div>
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
