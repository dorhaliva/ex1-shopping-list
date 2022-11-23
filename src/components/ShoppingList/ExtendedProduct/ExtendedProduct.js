import { useParams } from 'react-router-dom';
import { products } from '../../../data/products';

const ExtendedProduct = () => {
	const { id } = useParams();
	const product = products.find((product) => product.id === +id);

	if (product) {
		return (
			<div className='product'>
				<div className='product-info'>
					<h1> {product.name}</h1>
					<h3>Price: ${product.price}</h3>
					<h3>Store: {product.store}</h3>
					<h3>Description: {product.description}</h3>
				</div>
				<div>
					<div>
						<img src={product.images[0]} alt={product.name} />
					</div>
					<div>
						<img src={product.images[1]} alt={product.name} />
					</div>
				</div>
			</div>
		);
	}

	return <div>Product not found</div>;
};

export default ExtendedProduct;
