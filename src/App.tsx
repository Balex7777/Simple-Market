import { Product } from './components/Product/Product';
import './App.css'
import { useProducts } from './hooks/products';
import Loader from './components/Loader/Loader';
import ErrorMesage from './components/ErrorMessage/ErrorMesage';

function App() {
	const {loading, error, products} = useProducts()
	
  return (
		<>
			<header className='header'>
				<h1>Market</h1>
			</header>
			<section className='container'>
				{loading && <Loader />}
				{error && <ErrorMesage error={error}/>}
				{products.map(product => <Product product={product} key={product.id}/>)}
			</section>
		</>
  );
}

export default App;
