import Product from './Product/Product';
import { products } from '../../data/products';

const ShoppingList = () => {
	return (
		<div>
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</div>
	);
};

export default ShoppingList;
