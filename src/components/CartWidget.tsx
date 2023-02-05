import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/styles.scss';

export const CartWidget = () => {
	const [alertIsVisible, setAlertIsVisible] = useState(false);

	return (
		<>
			<div onClick={() => setAlertIsVisible(!alertIsVisible)}>
				<ShoppingCartIcon fontSize="large" style={{ cursor: 'pointer' }} />
				<h4 style={{ cursor: 'pointer' }}>15</h4>
			</div>
			{alertIsVisible && (
				<div className="alert">
					<p style={{ color: '#ffffff' }}>Tiene 15 cosas agregadas al carrito</p>
				</div>
			)}
		</>
	);
};
