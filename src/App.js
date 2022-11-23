import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ExtendedProduct from './components/ShoppingList/ExtendedProduct/ExtendedProduct';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ShoppingList />} />
				<Route path='/product/:id' element={<ExtendedProduct />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
