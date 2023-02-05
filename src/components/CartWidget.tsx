import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
	const [alertIsVisible, setAlertIsVisible] = useState(false);

	return (
		<div onClick={() => setAlertIsVisible(!alertIsVisible)}>
			<ShoppingCartIcon fontSize="large" />
			<h4>15</h4>

			{alertIsVisible && (
				<div
					style={{
						position: 'absolute',
						cursor: 'pointer',
						top: '64px',
						right: '0',
						backgroundColor: '#16283b',
						marginRight: '15px',
						padding: '10px',
						borderRadius: '5px',
						boxShadow: '0 0 10px rgba(0,0,0,0.5)',
					}}
				>
					<p style={{ color: '#ffffffX' }}>Tiene 15 cosas agregadas al carrito</p>
				</div>
			)}
		</div>
	);
};
