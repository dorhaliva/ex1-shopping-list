import './Product.css';

const Product = (props) => {
	return (
		<div className='product'>
			<div className='product-info'>
				<h1> {props.product.name}</h1>
				<h3>Price: ${props.product.price}</h3>
			</div>
			<div>
				<img src={props.product.images[0]} alt={props.product.name} />
			</div>
		</div>
	);
};

export default Product;
