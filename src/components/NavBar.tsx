import React from 'react';
import '../styles/styles.scss';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
	return (
		<nav className="navBarContainer">
			<h1>TiendaWeb</h1>

			<li>
				<a href="#">Productos</a>
				<a href="#">Sober nosotros</a>
				<a href="#">Contacto</a>
			</li>

			<CartWidget />
		</nav>
	);
};
