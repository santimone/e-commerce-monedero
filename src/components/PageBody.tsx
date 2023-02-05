import React from 'react';
import '../styles/styles.scss';

import { ItemListContainer } from './ItemListContainer';

export const PageBody = () => {
	return (
		<div className="productsContainer">
			<ItemListContainer greeting="Bienvenido a tu tienda virtual favorita" />
		</div>
	);
};
