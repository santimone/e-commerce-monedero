import React from 'react';
import '../styles/styles.scss';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar = () => {
	return (
		<div className="navBarContainer">
			<h1>TiendaWeb</h1>

			<li>
				<a href="#">Productos</a>
				<a href="#">Sober nosotros</a>
				<a href="#">Contacto</a>
			</li>

			<div>
				<ShoppingCartIcon fontSize="large" />
				<h4>15</h4>
			</div>
		</div>
	);
};
